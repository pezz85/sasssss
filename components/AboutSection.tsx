import ownersImage from "@/assets/owners-image.jpg";

export const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white/90 rounded-lg p-6 shadow-lg mb-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Chi siamo – Alessia & Stefano
                </h2>
                <p className="text-lg text-nature font-medium">
                  Vignaioli per passione e per tradizione
                </p>
              </div>
            </div>
            
            <div className="bg-white/90 rounded-lg p-6 shadow-lg space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Siamo Alessia e Stefano, vignaioli per passione e per tradizione.
                Da oltre 20 anni coltiviamo le nostre uve con metodo <strong className="text-nature">Biologico e Biodinamico</strong> su una ridente collina morenica, Monte Mamaor, a sud del Lago di Garda, a Valeggio sul Mincio (Regione Veneto).
              </p>
              
              <p>
                Siamo la <strong className="text-nature">terza generazione</strong> di vignaioli nella nostra famiglia, le nostre vigne (10 ettari) sono state piantate più di 50 anni fa dal papà di Stefano, solo varietà tradizionali: bianche (garganega, trebbiano, trebbianello, fernanda, malvasia) e rosse (corvina, rondinella, molinara, merlot) e tante uve antiche.
              </p>
              
              <p>
                La nostra agricoltura rispetta le persone, le piante, gli animali, il suolo e l'ambiente, rispetta la vita, i ritmi del tempo e la biodiversità. <strong className="text-nature">Questa è la Biodinamica per noi.</strong> Quello che vogliamo lasciare ai nostri figli.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src={ownersImage} 
                alt="Alessia e Stefano - I proprietari di Sassara Vini"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};