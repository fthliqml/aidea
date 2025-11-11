import { Header } from "@/components/landing-page/Header";
import { HeroSection } from "@/components/landing-page/HeroSection";
import { FeaturesSection } from "@/components/landing-page/FeaturesSection";
import { HowItWorksSection } from "@/components/landing-page/HowItWorksSection";
import { CTASection } from "@/components/landing-page/CTASection";
import { Footer } from "@/components/landing-page/Footer";
import { FloatingThemeToggle } from "@/components/ui/floating-theme-toggle";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
      <FloatingThemeToggle />
    </div>
  );
};

export default LandingPage;
