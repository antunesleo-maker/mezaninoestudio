import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import AboutBlock from "@/components/AboutBlock";
import ServicesSection from "@/components/ServicesSection";
import EssaysSection from "@/components/EssaysSection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <>
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutBlock />
      <ServicesSection />
      <EssaysSection />
      <FounderSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </>
);

export default Index;
