import HeroSection from "@/components/HeroSection";
import AsSeenOnSection from "@/components/AsSeenOnSection";
import IntroductoryAboutSection from "@/components/IntroductoryAboutSection";
import MainAboutServicesSection from "@/components/MainAboutServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RealResultsSection from "@/components/RealResultsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocationsSection from "@/components/LocationsSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AsSeenOnSection />
      <RealResultsSection />
      <IntroductoryAboutSection />
      <HowItWorksSection />
      <MainAboutServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationsSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
}
