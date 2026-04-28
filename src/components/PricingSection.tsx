import PricingCardBg from "@/assets/pricingcard.svg";

const features = [
  "Continuous nutrition intelligence",
  "Biomarker-driven decision support with structured follow-up testing",
  "Longitudinal trajectory insights across metabolic and cardiometabolic signals",
  "CGM analytics and metabolic pattern recognition",
  "Nutrition and supplement scheduling to support consistency",
  "Integrated wearable context and lifestyle signal interpretation",
  "Nutrition-to-outcome reporting",
  "Structured prevention momentum",
];

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="mt-[5px] shrink-0"
    aria-hidden="true"
  >
    <path
      d="M3 8.5l3 3 7-7"
      stroke="#000a19"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-[#000a19] py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div 
          className="w-full rounded-[48px] px-6 py-12 md:px-16 md:py-16 flex flex-col items-center"
          style={{ background: '#E6EFFF0D' }}
        >
          {/* Header copy */}
          <div className="max-w-[720px] mx-auto flex flex-col gap-4 text-center items-center mb-16 w-full">
            <h2 className="text-white font-bold text-[49px] leading-[100%] tracking-[-0.02em] text-center">
              Measures <span className="tracking-normal">membership.</span>
            </h2>
            <p className="text-[#E6EFFF] text-[16px] font-medium leading-[125%] tracking-normal max-w-[690px] text-left mx-auto">
              A structured system for understanding how daily nutrition and lifestyle decisions are <br/>shaping your long‑term health.
            </p>
          </div>

          {/* Pricing card container */}
          <div className="relative w-full rounded-[40px] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row min-h-[460px]">
            {/* Left Side: Background & Identity */}
            <div className="relative w-full md:w-[48%] pt-10 pb-10 pl-16 pr-10 md:pt-12 md:pb-12 md:pl-20 md:pr-12 flex flex-col justify-between items-start min-h-[400px] md:min-h-full">
              <img
                src={PricingCardBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              <div className="relative z-10 flex flex-col gap-8 w-full">
                <h3 className="text-[#000A19] font-semibold text-[39px] leading-[100%] tracking-[-0.02em]">
                  Measures Core
                </h3>

                <div className="flex flex-col gap-2">
                  <div className="inline-block bg-[#000a19] text-[#E6EFFF] text-[13px] font-medium leading-[125%] tracking-[0.01em] px-3 py-1 rounded-md w-fit">
                    Intro pricing
                  </div>
                  <div className="flex items-end gap-1.5 text-[#000A19] mt-2">
                    <span className="font-bold text-[49px] leading-[100%] tracking-[-0.02em]">$49</span>
                    <span className="text-[16px] font-medium leading-[125%] mb-2">/month</span>
                  </div>
                  <p className="text-[#000A19] text-[16px] font-medium leading-[125%] tracking-normal opacity-70">
                    Charged annually at $500 (15% off)
                  </p>
                </div>

                <div className="mt-20">
                  <button className="bg-[#136cfb] text-white font-semibold text-[16px] leading-[100%] px-10 py-4 rounded-full hover:bg-[#0f5cd6] transition-all duration-200 shadow-lg shadow-[#136cfb]/30 hover:-translate-y-0.5 active:translate-y-0 min-w-[180px]  text-center">
                    Get the App
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Features */}
            <div className="w-full md:w-[52%] p-8 md:p-12 bg-white flex flex-col justify-center border-t md:border-t-0 md:border-l border-[rgba(0,0,0,0.05)]">
              <ul className="flex flex-col gap-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-4 text-[#000A19] text-[16px] font-medium leading-[150%] tracking-normal">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-12 w-full">
            <p className="max-w-[630px] mx-auto text-[#E6EFFF] text-[16px] font-medium leading-[125%] tracking-normal text-left">
              Measures is designed for people who want clarity, confirmation, and control over where their health is going.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
