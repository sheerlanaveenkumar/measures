import AppNavbar from '@/components/AppNavbar';
import Footer from '@/components/Footer';

const faqSections = [
  {
    title: "Getting Started",
    color: "#136cfb",
    faqs: [
      {
        q: "How do I connect my lab results to Measures?",
        a: "After downloading the app, you can upload lab results from any major lab provider (Quest, LabCorp, etc.), connect via our supported integrations, or manually enter values. We support PDF uploads and will parse your results automatically.",
      },
      {
        q: "What devices does Measures support for CGM?",
        a: "Measures currently integrates with Dexcom G7, Libre 3, and Stelo. We're actively expanding CGM support. Data syncs automatically via our secure health platform integrations.",
      },
      {
        q: "Can I use Measures without CGM?",
        a: "Yes — CGM is optional. Measures provides full value from periodic lab testing alone. CGM adds real-time glucose pattern data on top of your biomarker foundation.",
      },
      {
        q: "How often should I retest?",
        a: "We recommend a structured quarterly retesting cadence for most biomarkers. Some markers like HbA1c are most meaningful every 3 months; others like ApoB can be reviewed semi-annually once stable.",
      },
    ],
  },
  {
    title: "Data & Privacy",
    color: "#29bcbc",
    faqs: [
      {
        q: "Who has access to my health data?",
        a: "Only you. Your health data is never sold, shared with third parties, or used for advertising. Our advisors access aggregate anonymized data only for improving clinical guidance models.",
      },
      {
        q: "Is my data HIPAA compliant?",
        a: "Yes. Measures handles all personal health data in compliance with HIPAA regulations. We use end-to-end encryption for data in transit and at rest.",
      },
      {
        q: "Can I export or delete my data?",
        a: "Absolutely. You can export all your data in CSV/PDF format at any time. You can also request complete account deletion, which removes all data from our systems within 30 days.",
      },
    ],
  },
  {
    title: "Membership & Billing",
    color: "#136cfb",
    faqs: [
      {
        q: "What is included in Measures Core?",
        a: "Measures Core includes continuous nutrition intelligence, biomarker-driven decision support, CGM analytics, wearable integration, longitudinal trajectory insights, and AI nutrition advisor. Full details are on our pricing page.",
      },
      {
        q: "How does intro pricing work?",
        a: "Intro pricing is $49/month billed annually at $500 (saving 15%). This rate is locked in for the duration of your membership as long as it remains active. Future price increases won't affect existing members.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. You can cancel at any time. If you cancel an annual plan, you retain access through the end of your billing period. No partial refunds are issued for unused months.",
      },
      {
        q: "Is there a free trial?",
        a: "We offer a 14-day free trial for new members. No credit card is required to start. Full access to all Measures Core features is available during the trial period.",
      },
    ],
  },
  {
    title: "Medical & Clinical",
    color: "#de6c21",
    faqs: [
      {
        q: "Is Measures a medical service?",
        a: "No. Measures is a health intelligence platform — not a medical provider. We help you understand your biology and make more informed nutrition decisions. We do not provide medical advice, diagnoses, or treatment recommendations. Always consult your physician for medical decisions.",
      },
      {
        q: "Can I share my Measures data with my doctor?",
        a: "Yes — and we encourage it. You can export a full longitudinal health report from the app as a PDF that's formatted for clinical review. Several of our users share this directly with their physicians as a supplement to standard appointments.",
      },
      {
        q: "What if a biomarker result is concerning?",
        a: "Measures will flag results outside optimal or normal ranges and provide educational context. For clinically significant values, we recommend consulting your healthcare provider. We do not interpret individual results as diagnoses.",
      },
    ],
  },
];

const contactOptions = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" stroke="#136cfb" strokeWidth="1.5" fill="rgba(19,108,251,0.1)"/>
        <path d="M22 6l-10 7L2 6" stroke="#136cfb" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Email support",
    desc: "For non-urgent questions and account issues.",
    action: "support@measures.health",
    color: "#136cfb",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#29bcbc" strokeWidth="1.5" fill="rgba(41,188,188,0.1)" strokeLinejoin="round"/>
      </svg>
    ),
    title: "In-app chat",
    desc: "Live support Mon–Fri, 9am–6pm PT.",
    action: "Open the app",
    color: "#29bcbc",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#136cfb" strokeWidth="1.5" fill="rgba(19,108,251,0.1)"/>
        <path d="M12 8v4l3 3" stroke="#136cfb" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Response time",
    desc: "We respond to all support requests within 24 hours on business days.",
    action: null,
    color: "#136cfb",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#000a19]">
      <AppNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[500px] h-[300px] opacity-10 rounded-full"
            style={{ background: "radial-gradient(ellipse, #136cfb 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-10 relative z-10">
          <div className="max-w-[640px] flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#136cfb]" />
              <span className="text-[#136cfb] text-sm font-semibold tracking-wide uppercase">Help Center</span>
            </div>
            <h1 className="text-white font-bold text-[clamp(36px,5vw,56px)] leading-[1.05] tracking-[-0.02em]">
              Support
            </h1>
            <p className="text-[#e6efff] text-lg font-medium leading-normal opacity-80">
              Find answers to common questions, learn how to get the most from Measures, or reach our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-16 border-b border-[rgba(230,239,255,0.08)]">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactOptions.map((opt) => (
              <div
                key={opt.title}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-[rgba(230,239,255,0.03)] border border-[rgba(230,239,255,0.08)] hover:bg-[rgba(230,239,255,0.06)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(230,239,255,0.04)] flex items-center justify-center">
                  {opt.icon}
                </div>
                <div>
                  <h3 className="text-[#e6efff] font-bold text-base mb-1">{opt.title}</h3>
                  <p className="text-[rgba(230,239,255,0.55)] text-sm font-medium">{opt.desc}</p>
                </div>
                {opt.action && (
                  <span className="text-sm font-semibold mt-auto" style={{ color: opt.color }}>
                    {opt.action} →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-10 flex flex-col gap-16">
          <h2 className="text-white font-bold text-[clamp(26px,3vw,36px)] leading-tight tracking-tight">
            Frequently asked questions
          </h2>

          {faqSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              {/* Section header */}
              <div className="flex items-center gap-3">
                <div
                  className="px-4 py-1.5 rounded-full border text-sm font-bold"
                  style={{
                    color: section.color,
                    background: `${section.color}10`,
                    borderColor: `${section.color}30`,
                  }}
                >
                  {section.title}
                </div>
                <div className="flex-1 h-px bg-[rgba(230,239,255,0.06)]" />
              </div>

              {/* FAQs */}
              <div className="flex flex-col gap-3">
                {section.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border border-[rgba(230,239,255,0.08)] bg-[rgba(230,239,255,0.02)] hover:bg-[rgba(230,239,255,0.04)] transition-colors overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                      <span className="text-[#e6efff] font-semibold text-base leading-snug">{faq.q}</span>
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[rgba(230,239,255,0.08)] flex items-center justify-center text-[rgba(230,239,255,0.5)] group-open:rotate-45 transition-transform duration-200">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-[rgba(230,239,255,0.65)] text-base font-medium leading-relaxed border-t border-[rgba(230,239,255,0.06)] pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-16 border-t border-[rgba(230,239,255,0.08)]">
        <div className="max-w-[1200px] mx-auto px-10 flex flex-col gap-8">
          <h2 className="text-white font-bold text-xl tracking-tight">Legal & policies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Privacy Policy", desc: "How we collect, use, and protect your personal data.", icon: "🔒" },
              { title: "Terms & Conditions", desc: "Rules and guidelines governing use of Measures.", icon: "📋" },
              { title: "Informed Medical Consent", desc: "Your rights and acknowledgements as a Measures member.", icon: "⚕️" },
              { title: "HIPAA Notice", desc: "How your protected health information is handled.", icon: "🏥" },
            ].map((doc) => (
              <a
                key={doc.title}
                href="#"
                className="flex flex-col gap-3 p-5 rounded-2xl bg-[rgba(230,239,255,0.02)] border border-[rgba(230,239,255,0.08)] hover:bg-[rgba(230,239,255,0.06)] hover:border-[rgba(230,239,255,0.15)] transition-all group"
              >
                <span className="text-2xl">{doc.icon}</span>
                <div>
                  <h3 className="text-[#e6efff] font-semibold text-sm mb-1 group-hover:text-white transition-colors">
                    {doc.title} →
                  </h3>
                  <p className="text-[rgba(230,239,255,0.45)] text-xs font-medium leading-relaxed">{doc.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-10 border-t border-[rgba(230,239,255,0.08)]">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="p-6 rounded-2xl bg-[rgba(222,108,33,0.06)] border border-[rgba(222,108,33,0.2)]">
            <div className="flex gap-3 items-start">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                <path d="M12 2L2 22h20L12 2z" stroke="#de6c21" strokeWidth="1.5" fill="rgba(222,108,33,0.15)" strokeLinejoin="round"/>
                <path d="M12 9v5M12 17v1" stroke="#de6c21" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div>
                <h3 className="text-[#de6c21] font-bold text-sm mb-2">Medical Disclaimer</h3>
                <p className="text-[rgba(230,239,255,0.55)] text-xs font-medium leading-relaxed">
                  The content, programs, products, and services provided through this site are intended solely for supporting a healthy lifestyle. Measures does not provide medical advice, diagnosis, treatment, or care. The information offered is not intended for the diagnosis, cure, mitigation, prevention, or treatment of any disease or condition. Always consult your qualified healthcare provider for any medical concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
