"use client";

import {asset} from "@/lib/asset";
import {clsx} from "clsx";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {useEffect, useState} from "react";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className={clsx("fixed top-0 inset-x-0 z-50 md:hidden bg-brand-dark/80 backdrop-blur-md border-b border-white/10 transition-all duration-300", visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none")}>
        {" "}
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-4">
            {/* Menu */}
            <button aria-label="Abrir menú" onClick={() => setOpen(true)} className="text-white text-2xl">
              ☰
            </button>

            {/* Logo */}
            <a href="#hero" aria-label="Ir al inicio" title="Ir al inicio">
              <Image src={asset("/images/logo.png")} alt="SmarTec" width={40} height={40} priority />
            </a>
          </div>

          {/* WhatsApp CTA */}
          <a href="https://wa.me/529615937791" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center w-9 h-9 rounded-full bg-whatsapp text-white shadow-md transition active:scale-95">
            {/* WhatsApp icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.9 11.9 0 0012.04 0C5.52 0 .52 5 .52 11.52c0 2.03.53 3.91 1.53 5.56L2 24l4.37-1.63A11.5 11.5 0 0012.04 23.04c6.52 0 11.5-5 11.5-11.52 0-3.08-1.2-5.95-3.02-8.04z" />
              <path d="M17.36 14.24c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.33-.8-.72-1.34-1.61-1.5-1.88-.16-.26-.02-.4.12-.53.12-.12.26-.32.39-.48.13-.16.17-.27.26-.45.09-.18.04-.34-.02-.47-.06-.12-.6-1.44-.82-1.97-.22-.51-.44-.44-.6-.45-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.26.27-1 1-1 2.46 0 1.46 1.03 2.87 1.17 3.07.14.2 2.02 3.2 4.9 4.49 2.88 1.29 2.88.86 3.4.81.52-.05 1.68-.68 1.92-1.34.24-.66.24-1.22.17-1.34-.07-.12-.24-.18-.5-.31z" />
            </svg>
          </a>
        </div>
      </header>

      {/* ANIMATED OVERLAY + DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/50" />

            {/* Drawer */}
            <motion.aside initial={{x: "-100%", opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: "-100%", opacity: 0}} transition={{duration: 0.3, ease: "easeOut"}} className="fixed top-0 left-0 z-50 w-60 bg-brand-dark text-white rounded-br-lg">
              <div className="p-6 space-y-6">
                {/* Close */}
                <button onClick={() => setOpen(false)} className="text-white text-xl" aria-label="Cerrar menú">
                  ✕
                </button>

                {/* Nav */}
                <motion.nav
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {staggerChildren: 0.08},
                    },
                  }}
                  className="space-y-4 text-lg"
                >
                  {[
                    {
                      label: "Servicios",
                      href: "#services",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Proceso",
                      href: "#process",
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3.5" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.39 1.26 1 1.51H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      ),
                    },
                    {
                      label: "Contacto",
                      href: "#footer",
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.12.9.32 1.77.6 2.6a2 2 0 01-.45 2L9 10a16 16 0 006 6l.68-.15a2 2 0 012 .45c.83.28 1.7.48 2.6.6A2 2 0 0122 16.92z" />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      variants={{
                        hidden: {opacity: 0, x: -8},
                        show: {opacity: 1, x: 0},
                      }}
                      className="flex items-center gap-3 w-min hover:text-brand-primary transition-colors"
                    >
                      <span className="text-white/80">{item.icon}</span>
                      <span>{item.label}</span>
                    </motion.a>
                  ))}
                </motion.nav>

                {/* Divider */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/70">
                    Diagnóstico preciso,
                    <br />
                    soluciones reales.
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
