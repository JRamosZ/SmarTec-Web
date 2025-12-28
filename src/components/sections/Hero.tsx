"use client";

import {Button} from "@/components/ui/Button";
import {useParallax} from "@/hooks/useParallax";
import {asset} from "@/lib/asset";
import Image from "next/image";
import {FadeIn} from "../ui/FadeIn";

export function Hero() {
  const offset = useParallax(0.15);

  return (
    <section id="hero" className="relative h-screen min-h-150 w-full overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <Image src={asset("/images/hero_img.jpg")} alt="Diagnóstico automotriz avanzado" fill priority className="object-cover" />
      </div>

      {/* Overlay – más claro */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content (NO se mueve) */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl text-left space-y-6">
            {/* Logo */}
            <Image src={asset("/images/logo.png")} alt="Tech Auto Lab" width={160} height={48} className="mb-4" />

            <FadeIn>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">Diagnóstico preciso, soluciones reales</h1>
            </FadeIn>

            {/* CTA */}
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
