import {Button} from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-8 bg-brand-primary text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">¿Listo para un diagnóstico preciso?</h2>

        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">Ya sea un vehículo personal o una flotilla completa, en SmarTec te damos soluciones reales con enfoque tecnológico.</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
          <Button href="https://wa.me/529615937791" variant="whatsapp" className="w-full sm:w-auto">
            Agenda por WhatsApp
          </Button>

          <Button href="tel:+529615937791" variant="secondary" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-primary">
            Atención a flotillas
          </Button>
        </div>
      </div>
    </section>
  );
}
