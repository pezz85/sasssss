import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BiodynamicSection } from "@/components/BiodynamicSection";
import { WinesSection } from "@/components/WinesSection";
import { VisitSection } from "@/components/VisitSection";
import { ContactSection } from "@/components/ContactSection";
import backgroundImage from "@/assets/SFONDO SITO.jpg";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="relative z-10">
        <AboutSection />
        <BiodynamicSection />
        <WinesSection />
        <VisitSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;