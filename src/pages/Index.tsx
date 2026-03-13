import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <>
    <SiteHeader />
    <main>
      <HeroSection />
      <ServicesSection />
      <FounderSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </>
);

export default Index;
