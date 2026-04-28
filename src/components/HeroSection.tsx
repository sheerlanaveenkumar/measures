import heroImage from "@/assets/herobg.svg";
import heroMobile from "@/assets/hermobile.png";
import shoeCutout from "@/assets/cutout.png";
import age from "@/assets/age.svg";
import glucose from "@/assets/glucose.svg";
import longevity from "@/assets/signals.svg";
import biomarker from "@/assets/biomarkers.svg";
const tags = [
  {
    icon:
      biomarker
    ,
    label: "Biomarkers",
  },
  {
    icon:
      glucose
    ,
    label: "Glucose patterns",
  },
  {
    icon: age,
    label: "Biological age",
  },
  {
    icon: longevity,
    label: "Longevity signals",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-[95vh] min-h-[700px] bg-[#000a19] z-10 overflow-hidden">
      {/* Background Image Layer */}
      <img
        src={heroImage}
        alt="Runner at dawn"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
      />
      <img
        src={heroMobile}
        alt="Runner at dawn"
        className="md:hidden absolute inset-0 w-full h-full object-cover object-[85%_bottom]"
      />
      {/* Cutout Overlay - Matches BG alignment */}
      {/* <img
        src={shoeCutout}
        alt=""
        aria-hidden
        className="hidden md:block absolute  inset-0 w-full h-full object-cover object-[75%_bottom] md:object-bottom pointer-events-none z-[2]"
      /> */}

      {/* Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Deep left fade - lightened slightly */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,10,25,0.75)_0%,rgba(0,10,25,0.5)_25%,rgba(0,10,25,0.1)_50%,rgba(0,10,25,0)_75%)]" />
        {/* Soft top fade */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-[linear-gradient(180deg,rgba(0,10,25,0.4)_0%,rgba(0,10,25,0)_100%)]" />
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-full flex flex-col justify-center pt-20 md:pt-32 pb-32 md:pb-[15vh]">
          <div className="max-w-[580px] flex flex-col gap-5 md:gap-2">
            <p 
              className="font-bold" 
              style={{ 
                color: '#E6EFFF', 
                fontFamily: 'Gellix', 
                fontSize: '18px', 
                lineHeight: '100%', 
                letterSpacing: '-0.03em' 
              }}
            >
              Measures
            </p>

            <h1 className="text-white font-bold text-[36px] md:text-[45px] leading-[1.1] tracking-[-0.02em]">
              Preventive health<br />intelligence.
            </h1>

            <div className="flex flex-col gap-1 mt-2">
              <p className="text-white font-bold text-[17px] md:text-[18px] tracking-tight">
                Stay in control of your health trajectory.
              </p>
              <p className="text-white/80 text-[15px] md:text-[16px] font-normal leading-[1.6] max-w-[500px]" style={{ color: '#E6EFFF' }}>
                Measures connects daily nutrition to real biological outcomes, so
                you can see patterns, adjust intelligently, and influence where
                your health is going.
              </p>
            </div>

            {/* Minimalist Tags */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 pt-4">
              {tags.map((tag) => (
                <div
                  key={tag.label}
                  className="flex items-center gap-1.5 opacity-70"
                >
                  <img src={tag.icon} alt="" className="w-3.5 h-3.5" />
                  <span className="text-white text-[13px] font-medium tracking-wide" style={{ color: '#E6EFFF99' }}>
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-5">
              <button className="bg-white text-[#000a19] font-semibold text-[16px] w-[200px] h-[48px] rounded-full hover:bg-white/90 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.4)] flex items-center justify-center">
                Get the App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
