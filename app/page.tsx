import AppPromoSection from "@/components/AppPromoSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorks";
import KeyFeaturesSection from "@/components/KeyFeatures";
import TrustedSection from "@/components/Trusted";
import WhyChooseUsSection from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      {/* pt-24 gives space below the header, pb-16 gives space above the footer */}
      <HeroSection />
      <TrustedSection />
      <KeyFeaturesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <AppPromoSection />
    </main>
  );
}
