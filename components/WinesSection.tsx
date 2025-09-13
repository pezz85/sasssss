import React, { useState } from "react";
import { WineCard } from "./WineCard";
import { WineDetailsModal } from "./WineDetailsModal";
import wineMisia from "@/assets/wine-white.jpg";
import wineBardolino from "@/assets/wine-red.jpg";
import wineChiaretto from "@/assets/wine-rose.jpg";
import winePinot from "@/assets/wine-pinot.jpg";
import esoticoWine from "@/assets/esotico-wine.jpg";
import wineCoconar from "@/assets/wine-coconar.jpg";
import wineAmphora from "@/assets/wine-amphora.jpg";
import winePetnat from "@/assets/wine-petnat.jpg";
import wineCagnara from "@/assets/wine-cagnara.jpg";

export const WinesSection = () => {
  const [selectedWine, setSelectedWine] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wines = [
    {
      name: "Misià IGT",
      type: "Vino Bianco",
      description: "garganega, trebbiano, trebbianello, breve contatto con le bucce, colore giallo vivo, ricorda il profumo del biancospino, buona salinità.",
      image: wineMisia,
      alcoholContent: "12.5% vol.",
      vintage: "2023",
      servingTemperature: "8-10°C",
      pairings: "Perfetto con pesce, crostacei, formaggi freschi e piatti a base di verdure."
    },
    {
      name: "Bardolino DOC",
      type: "Vino Rosso",
      description: "corvina, rondinella, molinara, vino rosso fresco, leggero, dai profumi di ciliegia, spezie e pepe nero.",
      image: wineBardolino,
      alcoholContent: "12% vol.",
      vintage: "2023",
      servingTemperature: "14-16°C",
      pairings: "Ideale con pasta al pomodoro, pizza, salumi leggeri e formaggi freschi."
    },
    {
      name: "Chiaretto Ciaro di Bardolino DOC",
      type: "Vino Rosato",
      description: "corvina, rondinella, rosato minerale, fruttato, perfetto per accompagnare piatti estivi o aperitivi.",
      image: wineChiaretto,
      alcoholContent: "12% vol.",
      vintage: "2023",
      servingTemperature: "10-12°C",
      pairings: "Perfetto per aperitivi, insalate, pesce e piatti estivi."
    },
    {
      name: "Pinot Grigio Griso DOC",
      type: "Vino Bianco",
      description: "100% pinot grigio, vino dal colore ramato, breve macerazione per 5 giorni, profumo di agrumi, gelsomino e note di miele.",
      image: winePinot,
      alcoholContent: "13% vol.",
      vintage: "2023",
      servingTemperature: "8-10°C",
      pairings: "Ottimo con pesce, frutti di mare, formaggi stagionati e piatti asiatici."
    },
    {
      name: "Esotico IGT",
      type: "Vino Speciale",
      description: "il vino che più ci rappresenta, il vigneto più vecchio dell'azienda, vigne di oltre 60 anni, breve macerazione per un'esplosione di frutta esotica succosa tutta da gustare",
      image: esoticoWine,
      alcoholContent: "13.5% vol.",
      vintage: "2023",
      servingTemperature: "10-12°C",
      pairings: "Perfetto con piatti speziati, formaggi erborinati e dessert al cioccolato."
    },
    {
      name: "Coconar IGT",
      type: "Vino Bianco",
      description: "100% trebbiano, vinificazione e macerazione in acciaio per 4 mesi, profumo intenso di buccia di arancia",
      image: wineCoconar,
      alcoholContent: "12.5% vol.",
      vintage: "2023",
      servingTemperature: "8-10°C",
      pairings: "Ideale con pesce, crostacei, formaggi freschi e piatti a base di agrumi."
    },
    {
      name: "Vin de Anfoa IGT",
      type: "Vino in Anfora",
      description: "100% garganega, vinificazione e macerazione in anfora con le bucce per 6 mesi",
      image: wineAmphora,
      alcoholContent: "13% vol.",
      vintage: "2023",
      servingTemperature: "10-12°C",
      pairings: "Perfetto con formaggi stagionati, salumi e piatti della tradizione veneta."
    },
    {
      name: "Garbo Fizz",
      type: "Pet Nat",
      description: "100% trebbiano, pet nat con breve macerazione, senza solfiti, fresco fruttato, salino",
      image: winePetnat,
      alcoholContent: "11.5% vol.",
      vintage: "2023",
      servingTemperature: "6-8°C",
      pairings: "Perfetto per aperitivi, sushi, ostriche e piatti leggeri."
    },
    {
      name: "Vin da Cagnara Bianco e Rosso",
      type: "Vino Bianco e Rosso",
      description: "100% garganega e 100% corvina dai vigneti più giovani, 20 anni, freschi, fruttati, grande bevibilità",
      image: wineCagnara,
      alcoholContent: "12% vol.",
      vintage: "2023",
      servingTemperature: "8-10°C (Bianco), 14-16°C (Rosso)",
      pairings: "Bianco: pesce, formaggi freschi. Rosso: pasta, salumi leggeri."
    }
  ];

  const handleWineClick = (wine: any) => {
    setSelectedWine(wine);
    setIsModalOpen(true);
  };

  return (
    <section id="vini" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-white/90 rounded-2xl p-3 shadow-lg inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              I Nostri Vini
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {wines.map((wine, index) => (
            <WineCard 
              key={index}
              name={wine.name}
              type={wine.type}
              description={wine.description}
              image={wine.image}
              onDetailsClick={() => handleWineClick(wine)}
            />
          ))}
        </div>
        
        <div className="bg-white/90 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-nature mb-6 text-center">Come li facciamo:</h3>
          <div className="text-foreground/80 leading-relaxed space-y-4">
            <p>
              <strong>Raccolta e selezione manuale delle uve</strong>, fermentazioni spontanee con pied de cuve, 
              nessuna filtrazione, nessuna chiarifica, solfiti solo se necessari.
            </p>
            <p className="text-center text-nature font-medium text-lg">
              Ogni bottiglia racconta l'annata, il suolo e il nostro lavoro.
            </p>
          </div>
        </div>
      </div>
      
      <WineDetailsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        wine={selectedWine}
      />
    </section>
  );
};