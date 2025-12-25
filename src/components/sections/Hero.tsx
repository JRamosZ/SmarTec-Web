import {Button} from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-150 w-full overflow-hidden">
      {/* Background image */}
      <Image src="images/hero.jpg" alt="Diagnóstico automotriz avanzado" fill priority className="object-cover" />

      {/* Overlay – más claro */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl text-left space-y-6">
            {/* Logo */}
            <Image src="images/logo.png" alt="Tech Auto Lab" width={160} height={48} className="mb-4" />

            {/* Slogan */}
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">Diagnóstico preciso, soluciones reales</h1>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="https://wa.me/529615937791" variant="whatsapp">
                Agenda tu Cita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
