import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WineDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  wine: {
    name: string;
    type: string;
    description: string;
    image?: string;
    alcoholContent?: string;
    vintage?: string;
    servingTemperature?: string;
    pairings?: string;
  } | null;
}

const getColoredName = (name: string) => {
  const colors: { [key: string]: string } = {
    'Misià': 'text-yellow-500',
    'Bardolino': 'text-red-500',
    'Chiaretto': 'text-blue-500',
    'Pinot Grigio': 'text-purple-500',
    'Esotico': 'text-red-500',
    'Coconar': 'text-orange-500',
    'Vin de Anfoa': 'text-amber-800',
    'Garbo Fizz': 'text-green-500',
    'Vin da Cagnara': 'text-yellow-500'
  };
  
  // Per "Esotico" con colori specifici per ogni lettera
  if (name === 'Esotico IGT') {
    return (
      <span>
        <span className="text-red-500">E</span>
        <span className="text-orange-500">s</span>
        <span className="text-yellow-500">o</span>
        <span className="text-green-500">t</span>
        <span className="text-blue-500">i</span>
        <span className="text-blue-500">c</span>
        <span className="text-purple-500">o</span>
        <span className="text-red-500"> I</span>
        <span className="text-orange-500">G</span>
        <span className="text-purple-500">T</span>
      </span>
    );
  }
  
  // Per "Vin da Cagnara Bianco e Rosso" con colori specifici
  if (name === 'Vin da Cagnara Bianco e Rosso') {
    return (
      <span>
        <span className="text-yellow-500">Vin da Cagnara</span>
        <span className="text-red-500"> Bianco e Rosso</span>
      </span>
    );
  }
  
  // Per "Pinot Grigio Griso DOC" con colore specifico
  if (name === 'Pinot Grigio Griso DOC') {
    return (
      <span style={{ color: '#582A46' }}>
        {name}
      </span>
    );
  }
  
  // Per "Vin de Anfoa IGT" con colore specifico
  if (name === 'Vin de Anfoa IGT') {
    return (
      <span style={{ color: '#4D192D' }}>
        {name}
      </span>
    );
  }
  
  const baseName = name.split(' ')[0];
  const color = colors[baseName] || 'text-nature';
  return <span className={color}>{name}</span>;
};

export const WineDetailsModal = ({ isOpen, onClose, wine }: WineDetailsModalProps) => {
  if (!wine) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {getColoredName(wine.name)}
          </DialogTitle>
          <p className="text-secondary text-sm font-medium uppercase tracking-wider">
            {wine.type}
          </p>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {wine.image && (
            <div className="w-full h-96 overflow-hidden flex justify-center items-center bg-gray-50 rounded-lg">
              <img 
                src={wine.image} 
                alt={wine.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            <div>
              <h3 className="text-lg font-semibold text-nature mb-2">Descrizione</h3>
              <p className="text-foreground/80 leading-relaxed">
                {wine.description}
              </p>
            </div>
            
            {wine.alcoholContent && (
              <div>
                <h3 className="text-lg font-semibold text-nature mb-2">Grado Alcolico</h3>
                <p className="text-foreground/80">{wine.alcoholContent}</p>
              </div>
            )}
            
            {wine.vintage && (
              <div>
                <h3 className="text-lg font-semibold text-nature mb-2">Annata</h3>
                <p className="text-foreground/80">{wine.vintage}</p>
              </div>
            )}
            
            {wine.servingTemperature && (
              <div>
                <h3 className="text-lg font-semibold text-nature mb-2">Temperatura di Servizio</h3>
                <p className="text-foreground/80">{wine.servingTemperature}</p>
              </div>
            )}
            
            {wine.pairings && (
              <div>
                <h3 className="text-lg font-semibold text-nature mb-2">Abbinamenti</h3>
                <p className="text-foreground/80">{wine.pairings}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end pt-4">
          <Button onClick={onClose} className="bg-nature hover:bg-nature/90 text-nature-foreground">
            Chiudi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
