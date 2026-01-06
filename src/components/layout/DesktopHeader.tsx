"use client";

import {Button} from "@/components/ui/Button";
import {asset} from "@/lib/asset";
import clsx from "clsx";
import Image from "next/image";
import {useEffect, useState} from "react";

export function DesktopHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={clsx("fixed top-0 inset-x-0 z-40 hidden md:block transition-all duration-300", visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none")}>
      <div className="bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <Image src={asset("/images/logo.webp")} alt="SmarTec" width={36} height={36} />
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm font-medium text-white/90">
            <a href="#services" className="hover:text-brand-primary transition">
              Servicios
            </a>
            <a href="#process" className="hover:text-brand-primary transition">
              Proceso
            </a>
            <a href="#footer" className="hover:text-brand-primary transition">
              Contacto
            </a>
          </nav>

          {/* CTA */}
          <Button href="https://wa.me/529615937791" variant="whatsapp">
            Agenda tu cita
          </Button>
        </div>
      </div>
    </header>
  );
}
