import { useMemo, useState, useEffect, useRef } from "react";
import { biomarkerService, type BiomarkerData, type Biomarker } from "@/api/biomarkers";
import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import BackgroundImg from "@/assets/background.svg";
import PricingSection from "@/components/PricingSection";

// ---------- Icons ----------
const SearchIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <circle cx="11" cy="11" r="7" stroke="#ffffff" strokeWidth="2.2" />
    <path
      d="M20 20l-3.5-3.5"
      stroke="#ffffff"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIconDark = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path
      d="M5 12l5 5L20 7"
      stroke="rgba(230,239,255,0.7)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIconLight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path
      d="M5 12l5 5L20 7"
      stroke="#000a19"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ---------- Helpers ----------
function formatRichText(text: string) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

// ---------- Components ----------
function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-white font-bold text-[15px] tracking-tight">{title}</h4>
      <div className="text-[rgba(230,239,255,0.75)] text-[14px] font-medium leading-[1.6]">
        {children}
      </div>
    </div>
  );
}

function TestItem({
  biomarker,
  isOpen,
  onToggle,
}: {
  biomarker: Biomarker;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={onToggle}
        className={`w-full flex items-center gap-3 pl-3.5 pr-5 py-4 rounded-2xl border transition-all text-left ${isOpen
          ? "bg-white border-white"
          : "bg-[rgba(230,239,255,0.03)] border-[rgba(230,239,255,0.07)] hover:bg-[rgba(230,239,255,0.06)]"
          }`}
      >
        <div 
          className="flex items-center justify-center w-8 h-8 rounded-lg"
          style={{ backgroundColor: isOpen ? 'rgba(0, 10, 25, 0.15)' : '#E6EFFF0D' }}
        >
          {isOpen ? <CheckIconLight /> : <CheckIconDark />}
        </div>
        <span
          className={`font-medium text-[15px] ${isOpen ? "text-[#000a19]" : "text-[rgba(230,239,255,0.85)]"
            }`}
        >
          {biomarker.name}
        </span>
      </button>

      {isOpen && biomarker.content && (
        <div className="mt-6 px-5 flex flex-col gap-6">
          {biomarker.content.map((block, idx) => {
            if (block.content.type === "break") return <div key={idx} className="h-px bg-[rgba(230,239,255,0.1)] my-2" />;

            const renderContent = () => {
              if (block.content.type === "paragraph") {
                return <p>{formatRichText(block.content.text || "")}</p>;
              }
              if (block.content.type === "list") {
                const ListTag = block.content.style === "ordered" ? "ol" : "ul";
                const listClass = block.content.style === "ordered" ? "list-decimal" : "list-disc";
                return (
                  <ListTag className={`${listClass} pl-5 flex flex-col gap-1`}>
                    {block.content.items?.map((item, i) => (
                      <li key={i}>{formatRichText(item)}</li>
                    ))}
                  </ListTag>
                );
              }
              return null;
            };

            if (block.heading) {
              return (
                <DetailSection key={idx} title={block.heading}>
                  {renderContent()}
                </DetailSection>
              );
            }

            return <div key={idx} className="text-[rgba(230,239,255,0.75)] text-[14px] font-medium leading-[1.6]">{renderContent()}</div>;
          })}
        </div>
      )}
    </div>
  );
}

// ---------- Page ----------
export default function WhatWeTestPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [data, setData] = useState<BiomarkerData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchInitiated = useRef(false);

  useEffect(() => {
    // Check cache first for instant response
    const cachedData = localStorage.getItem("biomarkers_data");
    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        setData(parsed);
        setIsLoading(false);
        // If we have cache, we don't necessarily need to fetch immediately 
        // to avoid "double call" and respect "dont call api all the time"
        return; 
      } catch (e) {
        console.error("Failed to parse cached biomarkers:", e);
      }
    }

    // Only fetch if no cache or if fetch hasn't been initiated yet (Strict Mode protection)
    if (fetchInitiated.current) return;
    fetchInitiated.current = true;

    const fetchData = async () => {
      try {
        const json = await biomarkerService.getBiomarkers();
        setData(json);
        localStorage.setItem("biomarkers_data", JSON.stringify(json));
      } catch (error) {
        console.error("Failed to fetch biomarkers:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const filteredCategories = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    if (!q) return data.categories;

    return data.categories
      .map((cat) => {
        const filteredSubPanels = cat.subPanels
          .map((sub) => ({
            ...sub,
            biomarkers: sub.biomarkers.filter(
              (b) =>
                b.name.toLowerCase().includes(q) ||
                cat.category.toLowerCase().includes(q) ||
                sub.name.toLowerCase().includes(q)
            ),
          }))
          .filter((sub) => sub.biomarkers.length > 0);

        return {
          ...cat,
          subPanels: filteredSubPanels,
        };
      })
      .filter((cat) => cat.subPanels.length > 0);
  }, [data, query]);

  return (
    <div className="min-h-screen bg-[#000a19] relative">
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0 overflow-hidden">
        <img src={BackgroundImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative">
        <div className="relative z-10 flex flex-col min-h-[460px]">
          <AppNavbar />

          {/* Hero Content */}
          <div className="flex-1 flex flex-col justify-center pt-10 pb-0">
            <div className="max-w-[1200px] mx-auto px-10 w-full">
              <h1 className="text-white text-center font-bold text-[clamp(34px,4.5vw,49px)] tracking-tight mb-8">
                What we test
              </h1>
            </div>

            {/* Intro Text */}
            <div className="max-w-[820px] ml-[10%] md:ml-[25%] px-10 flex flex-col items-start text-left gap-1">
              <h2 className="text-white font-bold text-[18px] tracking-tight self-start">
                110 lab tests to give you the most accurate picture of your health
              </h2>
              <p className="text-[rgba(230,239,255,0.7)] text-[16px] font-medium leading-relaxed self-start text-left">
                Our tests are handpicked by top doctors to deliver a thorough understanding of your <br /> present and future health.
              </p>
            </div>
          </div>

          {/* Search bar positioned between sections */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-[840px] px-10 z-20">
            <div className="flex items-center gap-4 px-2 py-3 bg-[rgba(230,239,255,0.05)] border border-[rgba(230,239,255,0.08)] shadow-2xl backdrop-blur-md transition-all focus-within:border-[rgba(230,239,255,0.15)] focus-within:bg-[rgba(230,239,255,0.08)]" style={{ borderRadius: '20px' }}>
              <SearchIcon />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search biomarkers, tests"
                className="flex-1 bg-transparent outline-none text-[16px] text-[#e6efff] placeholder-[rgba(230,239,255,0.4)] font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="pt-24 pb-10">
        <div className="max-w-[840px] mx-auto px-10 flex flex-col gap-12">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {filteredCategories.map((cat) => (
                <div key={cat.category} className="flex flex-col gap-6">
                  <h3 className="text-white font-bold text-[22px] tracking-tight pl-15">{cat.category}</h3>
                  <div className="flex flex-col gap-8">
                    {cat.subPanels.map((sub, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-4">
                        {sub.name !== "Other" && (
                          <h4 className="text-[rgba(230,239,255,0.6)] font-bold text-[14px] uppercase tracking-wider">
                            {sub.name}
                          </h4>
                        )}
                        <div className="flex flex-col gap-3">
                          {sub.biomarkers.map((biomarker) => (
                            <TestItem
                              key={biomarker.loincCode}
                              biomarker={biomarker}
                              isOpen={openId === biomarker.loincCode}
                              onToggle={() => setOpenId(openId === biomarker.loincCode ? null : biomarker.loincCode)}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {filteredCategories.length === 0 && (
                <p className="text-[rgba(230,239,255,0.6)] text-[14px] font-medium text-center">
                  No biomarkers found matching "{query}".
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* Measures membership — shared component for consistency across pages */}
      <PricingSection />

      <Footer />
    </div>
  );
}
