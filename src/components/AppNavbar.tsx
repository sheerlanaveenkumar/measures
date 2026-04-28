import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SiAppstore } from "react-icons/si";
import logo from "../assets/logo.png";

export default function AppNavbar() {
  const { pathname } = useLocation();
  const currentPath = pathname.replace(/\/$/, "") || "/";
  const isHome = currentPath === "/";
  const isWhatWeTest = currentPath === "/what-we-test";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${scrolled
        ? "border-b border-[rgba(230,239,255,0.08)] bg-[rgba(0,10,25,0.8)] backdrop-blur-[20px]"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            aria-label="Measures home"
            className="w-10 h-10 rounded-xl bg-[#0a1424] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-colors overflow-hidden"
          >
            <img src={logo} alt="Measures" className="w-full h-full object-cover" />
          </Link>

          <Link
            to="/#pricing"
            className="flex items-center justify-center gap-2 bg-[#136cfb] text-white text-sm font-semibold px-4 md:px-5 h-10 rounded-full hover:bg-[#0f5cd6] transition-colors duration-200 shadow-[0_4px_14px_rgba(19,108,251,0.35)]"
            onClick={() => {
              if (pathname === "/") {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <SiAppstore size={18} />
            Get the app
          </Link>
        </div>

        {/* Right: Menu pill */}
        <div className="hidden md:flex items-center gap-8 bg-[#000A1926] backdrop-blur-[20px] px-10 h-10 rounded-full">
          <Link
            to="/what-we-test"
            className={`${
              isWhatWeTest ? "text-white" : "text-[#E6EFFF66]"
            } text-sm font-medium hover:text-white transition-colors`}
          >
            What we test
          </Link>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <Link
            to="/#pricing"
            className={`${
              isHome ? "text-white" : "text-[#E6EFFF66]"
            } text-sm font-medium hover:text-white transition-colors`}
            onClick={() => {
              if (pathname === "/") {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore membership
          </Link>
        </div>
      </div>
    </nav>
  );
}
