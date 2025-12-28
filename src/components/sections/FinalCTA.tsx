import {Button} from "@/components/ui/Button";
import {FadeInOnScroll} from "@/components/ui/FadeInOnScroll";

export function FinalCTA() {
  return (
    <section className="bg-bg-section py-10">
      <div className="container mx-auto px-6">
        <FadeInOnScroll>
          <div className="max-w-4xl mx-auto bg-brand-dark text-white rounded-2xl shadow-cta px-8 py-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">¿Listo para un diagnóstico confiable?</h2>

            <p className="text-white/80 text-lg mb-10">Atención profesional para vehículos particulares y flotillas. Diagnóstico preciso, soluciones reales.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="https://wa.me/529615937791" variant="whatsapp">
                Escríbenos por WhatsApp
              </Button>

              <Button href="tel:+529615937791" variant="secondary" className="border-white text-white hover:bg-white/10">
                Atención a flotillas
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
