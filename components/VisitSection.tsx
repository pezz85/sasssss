import React from "react";
import { Button } from "./ui/button";
import visitImage from "../assets/visit-image.jpg";
import ultimaSlideImage from "../assets/ULTIMA SLIDE.jpg";

export const VisitSection = () => {
  return (
    <section id="visite" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/90 rounded-lg p-6 shadow-lg mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Vieni a Trovarci
              </h2>
              <h3 className="text-xl font-semibold text-nature mb-6">
                Visita & Degustazione
              </h3>
            </div>
            
            <div className="bg-white/90 rounded-lg p-6 shadow-lg space-y-6 text-foreground/80 leading-relaxed mb-8">
              <p className="text-lg">
                Vuoi scoprire davvero i nostri vini? <strong className="text-nature">Vieni a trovarci!</strong>
              </p>
              
              <div className="space-y-2">
                <p><strong>📍 Indirizzo:</strong></p>
                <p>Az Agr Pezzini - Sassara<br />
                Via Monte Mamaor, 17 – 37067 Valeggio sul Mincio (VR)</p>
              </div>
              
              <p className="text-nature font-medium">
                📅 Visite e degustazioni solo su prenotazione
              </p>
              
              <p>
                Contattaci sui nostri social per una visita.<br />
                📸 Instagram: <a href="https://instagram.com/sassara_vini" className="text-nature hover:underline">@sassara_vini</a>
              </p>
            </div>
            
          </div>
          
          <div className="bg-white/90 rounded-lg p-3 shadow-lg">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={ultimaSlideImage} 
                alt="Vieni a trovarci - Sassara Vini"
                className="w-full h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};