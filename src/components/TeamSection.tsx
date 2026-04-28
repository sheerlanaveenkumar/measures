import { useNavigate } from "react-router-dom";
const team = [
  {
    specialty: "Preventive Medicine",
    name: "Barry Breaux,\nMD, MBA",
    role: "Advising on biomarker prioritization and preventive risk modeling.",
  },
  {
    specialty: "Cardiovascular Medicine",
    name: "Carleton Nibley,\nMD",
    role: "Advising on lipid risk and cardiometabolic trajectory.",
  },
  {
    specialty: "Emergency Medicine",
    name: "Nathan Schlicher,\nMD, JD, MBA",
    role: "Providing frontline perspective on the consequences of unmanaged chronic risk.",
  },
];

const LinkedInIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M14.5527 0H1.44733C0.648 0 0 0.648 0 1.44733V14.5526C0 15.352 0.648 16 1.44733 16H14.5526C15.352 16 16 15.352 16 14.5526V1.44733C16 0.648 15.352 0 14.5527 0ZM4.95108 13.8155C4.95108 14.0481 4.76251 14.2366 4.52988 14.2366H2.73696C2.50434 14.2366 2.31577 14.0481 2.31577 13.8155V6.2996C2.31577 6.06697 2.50434 5.87841 2.73696 5.87841H4.52988C4.76251 5.87841 4.95108 6.06697 4.95108 6.2996V13.8155ZM3.63342 5.16993C2.69273 5.16993 1.93014 4.40733 1.93014 3.46664C1.93014 2.52595 2.69273 1.76335 3.63342 1.76335C4.57412 1.76335 5.33671 2.52595 5.33671 3.46664C5.33671 4.40733 4.57416 5.16993 3.63342 5.16993ZM14.3208 13.8494C14.3208 14.0632 14.1474 14.2366 13.9336 14.2366H12.0096C11.7958 14.2366 11.6224 14.0632 11.6224 13.8494V10.324C11.6224 9.79811 11.7766 8.01948 10.248 8.01948C9.06228 8.01948 8.82178 9.2369 8.77349 9.78325V13.8494C8.77349 14.0632 8.60013 14.2366 8.38622 14.2366H6.52544C6.31158 14.2366 6.13818 14.0632 6.13818 13.8494V6.26568C6.13818 6.05181 6.31158 5.87841 6.52544 5.87841H8.38622C8.60008 5.87841 8.77349 6.05181 8.77349 6.26568V6.92138C9.21315 6.26157 9.86655 5.75229 11.2578 5.75229C14.3385 5.75229 14.3208 8.63045 14.3208 10.2119V13.8494Z"
      fill="#136CFB"
    />
  </svg>
);

export default function TeamSection() {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-[#000a19] py-10 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col gap-8 md:gap-14">
        {/* Headline — centered */}
        <h2 className="text-white font-bold text-[clamp(24px,4vw,49px)] leading-[1.1] tracking-[-0.02em] text-left md:text-left max-w-[720px] mx-auto">
          Built from firsthand experience,
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          guided by clinical expertise.
        </h2>

        {/* Advisor grid — clean text layout, no card chrome */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((member) => (
            <div key={member.specialty} className="flex flex-col gap-2">
              <p className="text-[#E6EFFF] text-[16px] font-bold tracking-wide">
                {member.specialty}
              </p>
              <p className="text-white font-semibold text-[clamp(19px,2.2vw,39px)] leading-[1.15] tracking-tight whitespace-pre-line" style={{ fontWeight: '600' }}>
                {member.name}
              </p>
              <p className="text-[#E6EFFF] text-[14px] md:text-[15px] font-medium leading-[1.45] opacity-80" style={{ maxWidth: "300px" }}>
                {member.role}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-[#136CFB] text-[13px] font-medium hover:underline self-start "
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center" onClick={() => navigate('/who-we-are')}>
          <button className="w-[200px] h-[48px] bg-white text-[#000a19] font-semibold text-[16px] rounded-full flex items-center justify-center hover:bg-[#e6efff] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
            View the Team
          </button>
        </div>
      </div>
    </section>
  );
}
