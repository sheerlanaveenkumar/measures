import AppNavbar from "@/components/AppNavbar";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import BiomarkerChart from "@/components/BiomarkerChart";
import PricingSection from "@/components/PricingSection";
import gymPhoto from "@/assets/Measures.png";
import signaturePng from "@/assets/signature.png";
import BackgroundImg from "@/assets/background.svg";
import foundersGraphImg from "@/assets/founders_graph.png";
import foundersGraphImg2 from "@/assets/founders_graph2.png";


export default function FoundersStoryPage() {
  return (
    <div className="min-h-screen bg-[#000a19] relative">
      {/* <HeroBackdrop /> */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0 overflow-hidden">
        <img src={BackgroundImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        <AppNavbar />

        {/* Hero */}
        <section className="pt-20 pb-8">
          <div className="max-w-[1200px] mx-auto px-10">
            <h1 className="text-white text-center font-bold text-[clamp(32px,7vw,49px)] leading-[100%] tracking-[-0.02em]">
              Founder's story
            </h1>
          </div>
        </section>

        {/* Intro paragraph */}
        <section className="pb-10">
          <div className="max-w-[820px] mx-auto px-10">
            <p className="text-[#E6EFFF] text-[15px] md:text-[16px] font-medium leading-[125%] tracking-normal text-left">
              After more than a decade building Tubi from a scrappy six-person startup into one of streaming's most-watched platforms, Michael Ahiakpor had learned a thing or two about scale; and about what it takes to make something people actually use. But when he stepped away from Tubi in 2024, it wasn't another entertainment venture calling his name. It was something more personal.
            </p>
          </div>
        </section>

        {/* Charts Section: Unified Containers */}
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-5 items-center">
          <section
            className="max-w-[920px] w-full aspect-[820/400] md:h-[400px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${foundersGraphImg})` }}
          >
          </section>
        </div>

        {/* Second paragraph */}
        <section className="py-10">
          <div className="max-w-[820px] mx-auto px-10">
            <p className="text-[#E6EFFF] text-[15px] md:text-[16px] font-medium leading-[125%] tracking-normal text-left">
              Like many people in their late 40s, Michael found himself navigating a healthcare system that felt reactive by design; one that waited for problems to appear rather than helping people get ahead of them. He believed the same data-driven, user-obsessed thinking that transformed how millions of people watch TV could do something far more meaningful: transform how people manage their health.
            </p>
          </div>
        </section>

        {/* Gym scene photo */}
        <section className="py-6">
          <div className="max-w-[780px] mx-auto px-6">
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative bg-[#040912]">
              <img
                src={gymPhoto}
                alt="Michael training in a low-lit gym"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Third paragraph */}
        <section className="py-10">
          <div className="max-w-[820px] mx-auto px-10">
            <p className="text-[#E6EFFF99] text-[12px] md:text-[13px] font-medium leading-[125%] tracking-normal text-left">
              Since founding Measures, Michael has applied the platform's data-driven approach daily to his own health, and at 50+, he's in the best shape of his life to prove it.
            </p>
          </div>
        </section>

        {/* Charts Section 2: Unified Container */}
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-5 items-center">
          <section
            className="max-w-[920px] w-full aspect-[820/400] md:h-[400px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${foundersGraphImg2})` }}
          >
          </section>
        </div>

        {/* Fourth paragraph */}
        <section className="py-10">
          <div className="max-w-[820px] mx-auto px-10 flex flex-col gap-6">
            <p className="text-[#E6EFFF] text-[16px] font-medium leading-[125%] tracking-normal text-left">
              That conviction became Measures. Built alongside engineers from Uber, Apple, and Microsoft, and guided by physicians from Stanford, Duke, and the University of Washington, Measures is designed to make preventive health actionable not just informational. The same rigor Michael applied to product decisions at Tubi, grounded in data and relentlessly focused on the user experience, now drives how Measures helps people understand their bodies and stay ahead of disease.
            </p>
            <p className="pt-5 text-[#E6EFFF]  text-[16px] font-medium leading-[125%] tracking-normal text-left">
              For Michael, this isn't just a pivot it's a purpose. If great technology could make free TV accessible to millions, it could do the same for proactive, personalized healthcare.
            </p>
          </div>
        </section>

        {/* Signature block */}
        <section className="pt-4 pb-16">
          <div className="max-w-[820px] mx-auto px-10 flex flex-col items-center gap-3">
            <p className="text-[#E6EFFF99] text-[13px] font-medium leading-[125%] tracking-[0.01em]">
              Michael "Ahi" Ahiakpor, Founder & CEO
            </p>
            <img
              src={signaturePng}
              alt="Michael Ahiakpor signature"
              className="h-[60px] w-auto object-contain"
              loading="lazy"
            />
          </div>
        </section>

        {/* Measures membership — shared component for consistency across pages */}
        <PricingSection />

        <Footer />
      </div>
    </div>
  );
}
