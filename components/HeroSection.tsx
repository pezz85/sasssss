import React from "react";
import { Button } from "./ui/button";
import heroImage from "../assets/landing-page.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gray-800"
      style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-accent">SASSARA VINI</span><br />
          <span className="text-2xl md:text-3xl font-medium">Vini Biologici & Biodinamici</span><br />
          <span className="text-xl md:text-2xl text-white/90">Vini delle Morene</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Quattro generazioni di vignaioli, una visione naturale del vino. VIN DE UA vini fatti solo con l'uva, 
          tornare alla tradizione, ai profumi e colori dei vini autentici, dei vini dei nostri padri.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            onClick={() => scrollToSection('chi-siamo')}
            size="lg"
            className="bg-nature hover:bg-nature/90 text-nature-foreground border-none font-medium px-8 py-3"
          >
            Chi siamo
          </Button>
          <Button 
            onClick={() => scrollToSection('agricoltura')}
            size="lg"
            className="bg-nature hover:bg-nature/90 text-nature-foreground border-none font-medium px-8 py-3"
          >
            Scopri la nostra agricoltura
          </Button>
          <Button 
            onClick={() => scrollToSection('vini')}
            size="lg"
            className="bg-nature hover:bg-nature/90 text-nature-foreground border-none font-medium px-8 py-3"
          >
            Scopri i nostri vini
          </Button>
        </div>
      </div>
    </section>
  );
};