import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { label: "Contact Us", href: "/support" },
  { label: "Privacy policy", href: "/support" },
  { label: "Terms & Conditions", href: "/support" },
  { label: "Informed Medical Consent", href: "/support" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#000a19] md:pt-12 pb-10">
      <div className="max-w-[1100px] md:mx-auto px-0 md:px-10 flex flex-col gap-6">
        {/* Centered nav links */}
        <div className="flex flex-wrap items-center justify-center gap-1 md:gap-x-8 md:gap-y-3">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-[#e6efff] text-[14px] font-medium tracking-tight hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Centered copyright */}
        <p className="text-[rgba(230,239,255,0.55)] text-[14px] font-medium tracking-tight text-center">
          © Measures, Inc. San Francisco, CA
        </p>

        {/* Small logo at left + disclaimer centered */}
        <div className="flex items-start gap-4 mt-6 px-5 md:px-0">
          <div className="hidden md:flex-shrink-0 mt-1">
            <div className="w-7 h-7 rounded-lg bg-[#0f1a2e] border border-[rgba(230,239,255,0.12)] flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Measures" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <p className="text-[rgba(230,239,255,0.35)] text-[11px] font-normal leading-[1.6] tracking-wide">
              The content, programs, products, and services provided through this site and associated platforms are intended solely for supporting and encouraging a healthy lifestyle.
            </p>
            <p className="text-[rgba(230,239,255,0.35)] text-[11px] font-normal leading-[1.6] tracking-wide">
              The Measures Team and its professional associates do not provide medical advice, diagnosis, treatment, or care for any disease or medical condition. The information offered is not intended for the diagnosis, cure, mitigation, prevention, or treatment of any disease or condition, nor should it be used for medication management or dosing decisions.
            </p>
            <p className="text-[rgba(230,239,255,0.35)] text-[11px] font-normal leading-[1.6] tracking-wide">
              For any medical concerns or conditions, always consult your qualified healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
