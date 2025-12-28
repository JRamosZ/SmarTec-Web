"use client";

import {Button} from "@/components/ui/Button";
import {useParallax} from "@/hooks/useParallax";
import {asset} from "@/lib/asset";
import Image from "next/image";
import {FadeIn} from "../ui/FadeIn";

// small SVG shimmer placeholder for perceived performance
const shimmer = (w: number, h: number) =>
  `\n  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">\n    <defs>\n      <linearGradient id=\"g\">\n        <stop stop-color=\"#333\" offset=\"20%\" />\n        <stop stop-color=\"#222\" offset=\"50%\" />\n        <stop stop-color=\"#333\" offset=\"70%\" />\n      </linearGradient>\n    </defs>\n    <rect width=\"100%\" height=\"100%\" fill=\"#111\" />\n    <rect id=\"r\" width=\"100%\" height=\"100%\" fill=\"url(#g)\" />\n    <animate xlink:href=\"#r\" attributeName=\"x\" from=\"-100%\" to=\"100%\" dur=\"1.6s\" repeatCount=\"indefinite\"  />\n  </svg>`;

const toBase64 = (str: string) => (typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str));

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
        <Image src={asset("/images/hero_img.jpg")} alt="Diagnóstico automotriz avanzado" fill priority className="object-cover" sizes="100vw" quality={75} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 400))}`} />
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
