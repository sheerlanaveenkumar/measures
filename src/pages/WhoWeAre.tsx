import { Link } from 'react-router-dom';
import AppNavbar from '@/components/AppNavbar';
import Footer from '@/components/Footer';
import HeroBackdrop from '@/components/HeroBackdrop';
import PricingSection from '@/components/PricingSection';
import BackgroundImg from "@/assets/background.svg";

// Founder & advisor headshots
import michaelPhoto from '@/assets/image (2).png';
import preethamPhoto from '@/assets/image (3).png';
import barryPhoto from '@/assets/image (4).png';
import carletonPhoto from '@/assets/Measures_Gemini 3.1 Flash (Nano Banana 2)_2026-04-18_16-17-30 2.png';
import nathanPhoto from '@/assets/image (5).png';

// Company logos
import tubiLogoImg from '@/assets/whoweare/tubi.png';
import microsoftLogoImg from '@/assets/whoweare/microsoft.png';
import uberLogoImg from '@/assets/whoweare/ubar.png';
import appleLogoImg from '@/assets/whoweare/apple.png';
import sutterLogoImg from '@/assets/whoweare/sutter_health.png';
import stanfordLogoImg from '@/assets/whoweare/stanford.png';
import johnMuirLogoImg from '@/assets/whoweare/john_muir.png';
import virginiaLogoImg from '@/assets/whoweare/virginia.png';

// ---------- Small company logo components ----------
const TubiLogo = () => (
  <img src={tubiLogoImg} alt="Tubi" className="w-4 h-4 object-contain flex-shrink-0" />
);

const MicrosoftLogo = () => (
  <img src={microsoftLogoImg} alt="Microsoft" className="w-4 h-4 object-contain flex-shrink-0" />
);

const UberEatsLogo = () => (
  <img src={uberLogoImg} alt="Uber" className="w-4 h-4 object-contain flex-shrink-0" />
);

const AppleHealthLogo = () => (
  <img src={appleLogoImg} alt="Apple Health" className="w-4 h-4 object-contain flex-shrink-0" />
);

const SutterHealthLogo = () => (
  <img src={sutterLogoImg} alt="Sutter Health" className="w-4 h-4 object-contain flex-shrink-0" />
);

const StanfordLogo = () => (
  <img src={stanfordLogoImg} alt="Stanford" className="w-4 h-4 object-contain flex-shrink-0" />
);

const JohnMuirLogo = () => (
  <img src={johnMuirLogoImg} alt="John Muir" className="w-4 h-4 object-contain flex-shrink-0" />
);

const VirginiaMasonLogo = () => (
  <img src={virginiaLogoImg} alt="Virginia Mason" className="w-4 h-4 object-contain flex-shrink-0" />
);

// ---------- Data ----------
const founders = [
  {
    title: "Founder & CEO",
    name: 'Michael "Ahi" Ahiakpor',
    photo: michaelPhoto,
    bio: "Former CPO at Tubi, where he helped grow the platform from a 6-person startup to a streaming powerhouse. Now at Measures, applying his data-driven product approach to health prevention.",
    priorLine: "Prior to Measures, Micheal has held product leadership roles at the following companies:",
    companies: [
      { name: "Tubi", Logo: TubiLogo },
      { name: "Microsoft", Logo: MicrosoftLogo },
    ],
    accent: "from-[#136cfb] to-[#29bcbc]",
  },
  {
    title: "Head of Engineering",
    name: "Preetham Vesamani",
    photo: preethamPhoto,
    bio: "Software engineer with stints at Microsoft, Apple Health, and Uber Eats, where he architected large-scale catalog systems for grocery delivery. Now at Measures, Inc., bringing his engineering depth to health prevention technology.",
    priorLine: "Prior to Measures, Preetham has led engineering at the following companies:",
    companies: [
      { name: "Uber Eats", Logo: UberEatsLogo },
      { name: "Apple Health", Logo: AppleHealthLogo },
      { name: "Microsoft", Logo: MicrosoftLogo },
    ],
    accent: "from-[#29bcbc] to-[#136cfb]",
  },
];

const advisors = [
  {
    specialty: "Preventive Medicine",
    name: "Barry Breaux, MD, MBA",
    photo: barryPhoto,
    education:
      "MD - Columbia University Valegos College of Physicians and Surgeons MBA (Healthcare and Pharmaceutical Management) - Columbia Business School",
    affiliations: [
      { name: "Sutter Health", Logo: SutterHealthLogo },
      { name: "Stanford Medicine", Logo: StanfordLogo },
    ],
    avatarGradient: "from-[#2a5aa8] to-[#4a7ec8]",
    initials: "BB",
  },
  {
    specialty: "Cardiovascular Medicine",
    name: "Carleton Nibley, MD",
    photo: carletonPhoto,
    education: "MD - Duke University School of Medicine, Cardiovascular Disease and Cardiac Electrophysiology",
    affiliations: [{ name: "John Muir Health", Logo: JohnMuirLogo }],
    avatarGradient: "from-[#6b8ca8] to-[#8ba9c4]",
    initials: "CN",
  },
  {
    specialty: "Emergency Medicine",
    name: "Nathan Schlicher, MD, JD, MBA",
    photo: nathanPhoto,
    education: "MD - University of Washington - School of Medicine",
    affiliations: [{ name: "Virginia Mason Fransciscan Health", Logo: VirginiaMasonLogo }],
    avatarGradient: "from-[#4a6b8a] to-[#6a8bab]",
    initials: "NS",
  },
];

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen relative">
      {/* <HeroBackdrop />  */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0 overflow-hidden">
        <img src={BackgroundImg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10">
      <AppNavbar />

      {/* Hero: Who we are */}
      <section className="relative overflow-hidden pt-16 pb-10">
        <div className="max-w-[1200px] mx-auto px-10 relative z-10">
          <h1 className="text-white text-center font-bold text-[clamp(34px,4.5vw,52px)] tracking-tight">
            Who we are
          </h1>
        </div>
      </section>

      {/* Founding team */}
      <section className="py-10">
        <div className="max-w-[1100px] mx-auto px-10 flex flex-col gap-10">
          <div className="flex flex-col items-start text-left gap-3 max-w-[900px] mx-auto w-full">
            <h2 className="text-white font-semibold text-[25px] leading-[100%] tracking-[-0.01em]">Founding team</h2>
            <p className="text-[#E6EFFF] text-[16px] font-medium leading-[125%] tracking-normal max-w-[640px]">
              Built by veterans of Tubi, Uber, Apple, and Microsoft, Measures brings Silicon Valley's best engineering talent to the future of preventive health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto w-full">
            {founders.map((f) => (
              <div key={f.name} className="flex flex-col items-center text-left">
                <span className="text-[#E6EFFF99] text-[16px] font-extrabold leading-[125%] tracking-normal mb-3 text-center">
                  {f.title}
                </span>
                <div
                  className={`w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${f.accent} relative`}
                >
                  <img
                    src={f.photo}
                    alt={f.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 w-full flex flex-col gap-3">
                  <h3 className="text-[#E6EFFF] font-extrabold text-[16px] leading-[125%] tracking-normal">{f.name}</h3>
                  <p className="text-[#E6EFFF] text-[16px] font-medium leading-[125%] tracking-normal">
                    {f.bio}
                  </p>
                  <p className="text-[#E6EFFF] text-[16px] font-medium leading-[125%] tracking-normal">
                    {f.priorLine}
                  </p>
                  <div className="flex flex-col gap-2 pt-1">
                    {f.companies.map(({ name, Logo }) => (
                      <div key={name} className="flex items-center gap-2">
                        <Logo />
                        <span className="text-[#E6EFFF99] text-[13px] font-medium leading-[125%] tracking-[0.01em]">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {f.name === 'Michael "Ahi" Ahiakpor' && (
                    <div className="pt-4 ml-16">
                      <Link
                        to="/founders-story"
                        className="bg-white text-[#000A19] font-semibold text-[16px] leading-[100%] lg:w-[250px] w-[200px] h-[48px] pt-[14px] pr-[20px] pb-[18px] pl-[20px] rounded-[32px] flex items-center justify-center hover:bg-[#e6efff] transition-colors shadow-md"
                      >
                        Founder's Story
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Medical advisors */}
      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-10 flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-[900px] mx-auto w-full">
            <h2 className="text-white font-semibold text-[25px] leading-[100%] tracking-[-0.01em]">Medical advisors</h2>
            <p className="text-[#E6EFFF] text-[16px] font-medium leading-[125%] tracking-normal">
              Guided by physicians from Stanford, Duke, and the University of Washington, Measures brings world-class medical expertise to everyday preventive care.
            </p>
          </div>

          <div className="flex flex-col gap-10 max-w-[900px] mx-auto w-full">
            {advisors.map((a) => (
              <div key={a.name} className="flex items-start gap-5">
                <div
                  className={`w-[150px] h-[100px] rounded-[8px] overflow-hidden bg-gradient-to-br ${a.avatarGradient} flex-shrink-0 relative`}
                >
                  <img
                    src={a.photo}
                    alt={a.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <span className="text-[#E6EFFF99] text-[16px] font-extrabold leading-[125%] tracking-normal">
                    {a.specialty}
                  </span>
                  <h3 className="text-[#E6EFFF] font-extrabold text-[16px] leading-[125%] tracking-normal">{a.name}</h3>
                  <p className="text-[#E6EFFF] text-[16px] font-medium leading-[125%] tracking-normal">
                    {a.education}
                  </p>
                  <div className="flex flex-col gap-1.5 pt-1">
                    {a.affiliations.map(({ name, Logo }) => (
                      <div key={name} className="flex items-center gap-2">
                        <Logo />
                        <span className="text-[#E6EFFF99] text-[13px] font-medium leading-[125%] tracking-[0.01em]">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measures membership — shared component for consistency across pages */}
      <PricingSection />

      <Footer />
      </div>
    </div>
  );
}
