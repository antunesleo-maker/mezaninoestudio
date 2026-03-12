import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <>
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FounderSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </>
);

export default Index;
