import Graph from "@/assets/graph.png";
import GlucoseImg from "@/assets/glucose.png";
// import HeartRateImg from "@/assets/heart-rate.png";
import StepsImg from "@/assets/steps.png";
import Biological from "@/assets/biological.png";
import WaterImg from "@/assets/value.svg";
const steps = [
  {
    num: "01",
    title: "Connect your biology",
    desc: "Connect your biomarker data, glucose patterns, and lifestyle signals to build a living model of your metabolic health.",
    visual: (
      <div className="w-full h-full flex items-center justify-center px-2">
        <div className="w-full max-w-[260px] h-[140px] rounded-[24px] bg-[#0c1322]  flex flex-col items-center justify-center gap-4 shadow-2xl" style={{ background: '#E6EFFF0D' }}>
          <div
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center relative"
            style={{
              background:
                "linear-gradient(135deg, #4b8df8 0%, #9cc4ff 45%, #ffe19a 100%)",
            }}
          >
            <div className="absolute inset-[1px] rounded-full shadow-[inset_0_0_8px_rgba(255,255,255,0.4)]" />
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center relative z-10 shadow-sm">
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 2.5v7M2.5 6h7"
                  stroke="#0c1322"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <p className="text-white text-[13px] font-bold tracking-tight" >
            Connect Lab Data
          </p>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Reveal what food is doing",
    desc: "Identify how specific meals and patterns influence glucose stability, lipid responses, inflammation markers, and long-term risk signals.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-5 px-4">
        <div className="w-full flex items-center justify-center overflow-hidden">
          <img src={Graph} alt="Food impact graph" className="w-full max-w-[290px] h-auto object-contain" />
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2.5 px-[18px] py-[10px] rounded-full bg-[#136cfb] text-white">
            {/* <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M12 21.5c-4.4 0-8-3.6-8-8 0-4.4 8-12.5 8-12.5s8 8.1 8 12.5c0 4.4-3.6 8-8 8zm0-18.4C9.5 6.7 6 10.8 6 13.5c0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.7-3.5-6.8-6-10.4z" />
            </svg> */}
            <img src={GlucoseImg} alt="" />
            <span className="text-[11px] font-bold">Glucose</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="text-[11px] font-bold">Heart rate</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            {/* <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 16v-2a2 2 0 0 1 2-2h2l3 3 3-3h2a2 2 0 0 1 2 2v2M3 20h18" />
            </svg> */}
            <img src={StepsImg} alt="" />
            <span className="text-[11px] font-bold">Steps</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Adjust with precision",
    desc: "Make targeted changes and confirm progress through structured follow-up testing, trajectory indicators, and biological momentum signals.",
    visual: (
      <div className="w-full h-full flex items-center justify-center px-2">
        <div className="w-full max-w-[280px] h-[155px] rounded-[24px] bg-[#181c22] relative overflow-hidden flex flex-col items-center pt-6 shadow-2xl">
          {/* Entire Card Background */}
          <img
            src={WaterImg}
            alt="Wave background"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          />

          <p className="text-white text-[12px] font-semibold mb-0 relative z-20">Biological Age</p>
          <div className="flex items-baseline gap-1.5 relative z-20 translate-y-1">
            <span className="text-[#2c7cf9] text-[56px] font-extrabold leading-none tracking-tight">38.0</span>
            <span className="text-[#2c7cf9] text-[13px] font-bold">years</span>
          </div>

          {/* Bottom Text Labels */}
          <div className="absolute bottom-4 left-0 w-full flex justify-center z-10">
            <span className="text-white text-[13px] font-bold">14 years younger</span>
          </div>
          <div className="absolute bottom-4 left-5 z-10">
            <span className="text-white text-[11px] font-semibold opacity-90">51</span>
          </div>
          <div className="absolute bottom-4 right-5 z-10">
            <span className="text-white text-[11px] font-semibold opacity-80">38.0</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-[#000a19] py-0 md:py-16">
      <div className="md:max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col gap-14">
        {/* Headline */}
        <div >
          <h2 className="text-white font-bold text-[clamp(32px,4vw,49px)] leading-[1.05] tracking-[-0.02em] text-left" style={{ justifySelf: 'center', maxWidth: '720px' }} >
            Run your biology as an{" "}
            <span className="text-white">intelligent system</span>.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[rgba(230,239,255,0.04)] border border-[rgba(230,239,255,0.07)] rounded-2xl p-6 flex flex-col gap-5 hover:bg-[rgba(230,239,255,0.07)] transition-colors duration-200"
            >
              {/* Step number — centered at top */}
              <p className="text-[rgba(230,239,255,0.45)] text-[13px] font-bold tracking-[0.15em] text-center pt-1">
                {step.num}
              </p>

              {/* Visual — consistent height */}
              <div className="h-[190px] w-full flex items-center justify-center">
                {step.visual}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 mt-3">
                <h3 className="text-[#e6efff] text-[17px] font-extrabold leading-[1.25]">
                  {step.title}
                </h3>
                <p className="text-[#e6efff] text-[15px] font-medium leading-[1.5] opacity-80" style={{ maxWidth: '260px' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
