import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WineCardProps {
  name: string;
  description: string;
  type: string;
  image?: string;
  onDetailsClick?: () => void;
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

export const WineCard = ({ name, description, type, image, onDetailsClick }: WineCardProps) => {
  return (
    <Card className="h-[600px] bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {image && (
        <div className="w-full h-80 overflow-hidden flex justify-center items-center bg-gray-50">
          <img 
            src={image} 
            alt={name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">{getColoredName(name)}</CardTitle>
        <CardDescription className="text-gray-600 text-sm font-medium uppercase tracking-wider">
          {type}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        
        {/* PULSANTE SCOPRI DI PIÙ - ELEGANTE E ALLINEATO */}
        <div className="mt-auto">
          <button 
            onClick={onDetailsClick}
            className="w-full bg-nature hover:bg-nature/90 text-white font-semibold py-3 px-5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300"
            style={{
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Scopri di più
          </button>
        </div>
      </CardContent>
    </Card>
  );
};