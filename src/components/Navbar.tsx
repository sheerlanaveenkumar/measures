import { Link } from "react-router-dom";
import { SiAppstore } from "react-icons/si";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-4 md:px-10 md:py-5">
        {/* Left: Logo + Get the App */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/"
            aria-label="Measures home"
            className="w-10 h-10 rounded-xl bg-[#0a1424] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-colors shrink-0 overflow-hidden"
          >
            <img src={logo} alt="Measures" className="w-full h-full object-cover" />
          </Link>

          <Link
            to="/#pricing"
            className="flex items-center justify-center gap-1.5 md:gap-2 bg-[#136cfb] text-white text-[12px] md:text-sm font-semibold px-4 md:px-5 h-10 rounded-full hover:bg-[#0f5cd6] transition-colors duration-200 shadow-[0_4px_14px_rgba(19,108,251,0.35)] whitespace-nowrap"
            onClick={() => {
              if (window.location.pathname === "/") {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <SiAppstore className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" />
            <span className="hidden xs:inline">Get the app</span>
            <span className="xs:hidden" style={{ color: 'rgba(255,255,255,0.8)' }}>Get the app</span>
          </Link>
        </div>

        {/* Right: Menu pill */}
        <div className="flex items-center gap-3 md:gap-8 bg-white/[0.12] backdrop-blur-[20px] px-4 md:px-10 h-10 rounded-full">
          <Link
            to="/what-we-test"
            className="text-white text-[13px] md:text-sm font-medium hover:text-white/80 transition-colors whitespace-nowrap"
          >
            What we test
          </Link>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <Link
            to="/#pricing"
            className="text-white text-[13px] md:text-sm font-medium hover:text-white/80 transition-colors whitespace-nowrap"
            onClick={() => {
              if (window.location.pathname === "/") {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore <span className="hidden sm:inline">membership</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
