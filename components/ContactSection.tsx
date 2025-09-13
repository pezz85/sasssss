export const ContactSection = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">📬 Contattaci</h2>
          
          <div className="max-w-2xl mx-auto space-y-4 text-primary-foreground/90">
            <h3 className="text-xl font-semibold text-accent">
              Az Agr Pezzini - Sassara – Vini Biologici & Biodinamici
            </h3>
            
            <div className="space-y-2">
              <p>Via Monte Mamaor, 17 – 37067 Valeggio sul Mincio (VR)</p>
              <p>
                📞 <a href="tel:+393397825418" className="hover:text-accent transition-colors">
                  +39 339 7825418
                </a>
              </p>
              <p>
                📧 <a href="mailto:sassaravini@gmail.com" className="hover:text-accent transition-colors">
                  sassaravini@gmail.com
                </a>
              </p>
              <p>
                📸 Instagram: <a href="https://instagram.com/sassara_vini" className="hover:text-accent transition-colors">
                  @sassara_vini
                </a>
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-primary-foreground/70 text-sm">
            <p>© 2024 Sassara Vini - Az Agr Pezzini. Tutti i diritti riservati.</p>
            <p>Vini Biologici & Biodinamici delle Morene</p>
          </div>
        </div>
      </div>
    </footer>
  );
};