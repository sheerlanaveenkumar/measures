import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NutritionSection from "@/components/NutritionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PreventionSection from "@/components/PreventionSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000a19] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NutritionSection />
      <HowItWorksSection />
      <PreventionSection />
      <TeamSection />
      <PricingSection />



      <CtaSection />
      <Footer />
    </main>
  );
}
