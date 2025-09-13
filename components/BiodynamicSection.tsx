import agricultureImage from "@/assets/questa.jpg";

export const BiodynamicSection = () => {
  return (
    <section id="agricoltura" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-white/90 rounded-2xl p-3 shadow-lg inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              La Nostra Agricoltura Biodinamica
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/90 rounded-lg p-3 shadow-lg">
              <img 
                src={agricultureImage} 
                alt="Vigneto durante la vendemmia - Agricoltura biodinamica"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/90 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-nature mb-4">Cos'è la biodinamica?</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                È un'agricoltura che dialoga con la terra, ne segue i ritmi e la sostiene con pratiche rigenerative.
              </p>
            </div>
            
            <div className="bg-white/90 rounded-lg p-6 shadow-lg space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Usiamo preparati naturali come <strong className="text-nature">cornoletame e cornosilice</strong>, preparati da cumulo e tisane di ortica ed equiseto, seminiamo sovesci e osserviamo le fasi lunari per ogni attività sia in campagna sia in cantina.
              </p>
              
              <p>
                <strong className="text-nature">Non trattiamo la terra come una risorsa, ma come un organismo vivente.</strong>
              </p>
              
              <p>
                Per questo i nostri vigneti sono ricchi di biodiversità, insetti utili, erbe spontanee, e profumano di vita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};