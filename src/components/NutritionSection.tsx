import CalorieTracker from "./CalorieTracker";
import Advisor from '@/assets/nut_advisor.png'
import LongevityOutlook from '@/assets/logevity_outlook.png'
const biomarkers = [
  { label: "Apolipoprotein B (ApoB)", value: "85", unit: "mg/dL", status: "Normal", color: "#29bcbc", bg: "rgba(41,188,188,0.03)" },
  { label: "Hemoglobin A1c", value: "5.4", unit: "%", status: "Normal", color: "#29bcbc", bg: "rgba(41,188,188,0.03)" },
  { label: "Uric Acid", value: "5.2", unit: "mg/dL", status: "Optimal", color: "#136cfb", bg: "rgba(19,108,251,0.03)" },
  { label: "Fasting Insulin", value: "3.4", unit: "mU/L", status: "Optimal", color: "#136cfb", bg: "rgba(19,108,251,0.03)" },
];

const scoreData = [
  { date: "11/1/24", score: 58, color: "#de6c21" },
  { date: "5/28", score: 55, color: "#de6c21" },
  { date: "5/29", score: 66, color: "#29bcbc" },
  { date: "5/30", score: 72, color: "#29bcbc" },
  { date: "5/31", score: 79, color: "#29bcbc" },
  { date: "11/1/24", score: 83, color: "#29bcbc" },
  { date: "1/1/26", score: 85, color: "#136cfb" },
];

export default function NutritionSection() {
  const maxScore = 100;
  const chartHeight = 100;

  return (
    <section className="relative z-0 w-full bg-[#000a19] pt-10 pb-10 md:pt-8 md:pb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col gap-5 md:gap-16 items-center">
        {/* Desktop Headline */}
        <div className="hidden lg:block max-w-[700px]  text-center w-full">
          <h2 className="text-white font-bold text-[32px] md:text-[42px] lg:text-[49px] leading-[1.05] tracking-[-0.02em] text-left" style={{ justifySelf: 'center' }} >
            Nutrition is the highest-<br />frequency health decision<br />you make.
          </h2>
        </div>

        {/* Mobile Headline */}
        <div className="lg:hidden w-full text-center">
          <h2 className="text-white font-bold text-[clamp(28px,4.5vw,44px)] leading-[1.05] tracking-[-0.02em] max-w-[600px] mx-auto">
            Nutrition is the highest-<br />frequency health decision<br />you make.
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid w-full bg-[rgba(230,239,255,0.02)] rounded-[40px] p-10 grid-cols-[1.2fr_1.1fr_1.1fr] gap-10 border border-[rgba(230,239,255,0.05)] items-stretch">
          {/* Biomarker Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {biomarkers.map((b) => (
              <div
                key={b.label}
                className="min-w-[150px] rounded-[24px] p-4 flex flex-col gap-1 "
                style={{ background: b.bg, border: '1px solid rgba(230,239,255,0.02)' }}
              >
                <div className="flex flex-col gap-1.5">
                  <p className="text-[rgba(230,239,255,0.6)] text-[11px] font-semibold tracking-tight whitespace-nowrap overflow-hidden text-overflow-ellipsis">{b.label}</p>
                  <div className="flex items-baseline gap-1.5 pt-1">
                    <span className="font-bold text-[32px] leading-none tracking-tighter" style={{ color: b.color }}>{b.value}</span>
                    <span className="text-[11px] font-medium"style={{ color: b.color }}>{b.unit}</span>
                  </div>
                </div>
                <span className="text-[12px] font-semibold text-[rgba(230,239,255,0.4)]">{b.status}</span>
              </div>
            ))}
          </div>

          {/* AI Advisor Card */}
          <div 
            className="flex flex-col gap-6 h-full rounded-[16px] bg-[#000A194D]"
            style={{ 
              width: '100%',
              maxWidth: '360px', 
              height: '274px', 
              padding: '24px 20px',
              border: '1px solid rgba(230,239,255,0.05)'
            }}
          >
            <div className="flex flex-col gap-2">
              <span className="bg-[#136CFB] text-white text-[10px] font-bold px-2.5 py-1 rounded-md self-start tracking-wider uppercase">
                OPTIMAL
              </span>
              <div className="flex items-center gap-2.5">
                {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" fill="currentColor" />
                </svg> */}
                <img src={Advisor} alt="" />
                <h3 className="text-white font-semibold text-[20px] tracking-tight">Nutrition Advisor</h3>
              </div>
            </div>

            <p className="text-[rgba(230,239,255,0.65)] text-[12px] font-medium leading-[1.65]">
              This oatmeal and blueberry meal is a nutritionally strong choice with excellent fiber,{" "}
              <span className="text-[#136CFB] font-bold">magnesium</span>,{" "}
              <span className="text-[#136CFB] font-bold">zinc</span>, and moderate protein. It aligns well with
              your cardiometabolic health and longevity goals, though the elevated{" "}
              <span className="text-[#136CFB] font-bold">HbA1c</span> and{" "}
              <span className="text-[#136CFB] font-bold">fructosamine</span> warrant some attention to overall
              carbohydrate load throughout the day.
            </p>
          </div>

          <div 
            className="flex flex-col h-full items-center justify-center"
            style={{ 
              width: '100%',
              maxWidth: '360px', 
              height: '280px', 
            }}
          >
            <img 
              src={LongevityOutlook} 
              alt="Longevity Outlook Score" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Mobile Blueprint Layout */}
        <div className="lg:hidden w-full flex flex-col gap-10">
          {/* Top Score Section */}
          <div className="w-full">
            <img 
              src={LongevityOutlook} 
              alt="Longevity Outlook Score" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Biomarkers Grid - Refined for Mobile to match Desktop */}
          <div className="grid grid-cols-2 gap-3 max-w-[400px] mx-auto w-full">
            {biomarkers.map((b) => (
              <div
                key={b.label}
                className="rounded-[24px] p-4 flex flex-col justify-between border border-[rgba(230,239,255,0.05)] h-[130px]"
                style={{ background: b.bg }}
              >
                <div className="flex flex-col gap-1.5">
                  <p className="text-[rgba(230,239,255,0.7)] text-[10.5px] font-bold tracking-tight leading-tight whitespace-nowrap">{b.label}</p>
                  <div className="flex items-baseline gap-1 pt-1">
                    <span className="font-bold text-[28px] leading-none tracking-tighter" style={{ color: b.color }}>{b.value}</span>
                    <span className="text-[rgba(230,239,255,0.4)] text-[11px] font-bold">{b.unit}</span>
                  </div>
                </div>
                <span className="text-[rgba(230,239,255,0.5)] text-[11px] font-bold">{b.status}</span>
              </div>
            ))}
          </div>

          {/* Calorie Tracker Component */}
          <CalorieTracker />
        </div>

        {/* Desktop Bottom Copy */}
        <div className="hidden lg:flex max-w-[640px] flex-col gap-8 text-center items-center mt-12">
          <h2
            className="font-semibold text-[clamp(28px,3.5vw,39px)] leading-[1.1] tracking-tight text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(177deg, #136cfb 17%, #29bcbc 62%, #ffffff 81%)" }}
          >
            Measures was built to make prevention more measurable.
          </h2>
          <div className="text-[#e6efff] text-base font-medium leading-[1.5] space-y-4 text-left">
            <p>Chronic illness rarely appears suddenly. It develops gradually through patterns that form over years.</p>
            <p>Daily nutrition is one of the most powerful controllable inputs shaping these patterns; influencing metabolism, inflammation, lipid biology, and long-term risk.</p>
            <p>Yet most people receive little biological feedback about how their everyday decisions are affecting their future health.</p>
          </div>
        </div>

        {/* Mobile Bottom Copy */}
        <div className="lg:hidden w-full flex flex-col gap-5 md:gap-10 mt-0 md:mt-10">
          <h2 className="font-bold text-[15px] leading-[1.4] tracking-tight text-white text-left mt-5 md:mt-10 ">            Measures was built to make prevention more measurable.
          </h2>
          <div className="text-[rgba(230,239,255,0.8)] text-[15px] font-medium leading-[1.6] space-y-6 text-left max-w-[600px]">
            <p className="mb-3 md:mb-5">Chronic illness rarely appears suddenly. It develops gradually through patterns that form over years.</p>
            <p className="mb-3 md:mb-5">Daily nutrition is one of the most powerful controllable inputs shaping these patterns; influencing metabolism, inflammation, lipid biology, and long-term risk.</p>
            <p className="mb-3 md:mb-5">Yet most people receive little biological feedback about how their everyday decisions are affecting their future health.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
