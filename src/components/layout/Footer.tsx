import {asset} from "@/lib/asset";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="footer" className="bg-ui-900 text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Image src={asset("/images/logo.webp")} alt="SmarTec logo" width={140} height={60} className="mb-6 opacity-90" />
            <p className="text-sm text-center text-white/70 max-w-xs">
              Diagnóstico preciso,
              <br />
              soluciones reales.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-medium text-sm uppercase tracking-wide text-white/70 mb-4">Contacto</h4>

            <div className="flex gap-5">
              {/* WhatsApp */}
              <a href="https://wa.me/529615937791" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" className="transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.9 11.9 0 0012.04 0C5.52 0 .52 5 .52 11.52c0 2.03.53 3.91 1.53 5.56L2 24l4.37-1.63A11.5 11.5 0 0012.04 23.04c6.52 0 11.5-5 11.5-11.52 0-3.08-1.2-5.95-3.02-8.04zM12.04 20.4c-1.72 0-3.4-.46-4.88-1.33l-.35-.21-3.68.97.98-3.58-.22-.36A8.5 8.5 0 013.58 11.5c0-4.7 3.84-8.54 8.54-8.54 2.28 0 4.42.89 6.03 2.51a8.41 8.41 0 012.5 6.03c0 4.7-3.84 8.54-8.54 8.54z" />
                  <path d="M17.36 14.24c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.33-.8-.72-1.34-1.61-1.5-1.88-.16-.26-.02-.4.12-.53.12-.12.26-.32.39-.48.13-.16.17-.27.26-.45.09-.18.04-.34-.02-.47-.06-.12-.6-1.44-.82-1.97-.22-.51-.44-.44-.6-.45-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.26.27-1 1-1 2.46 0 1.46 1.03 2.87 1.17 3.07.14.2 2.02 3.2 4.9 4.49 2.88 1.29 2.88.86 3.4.81.52-.05 1.68-.68 1.92-1.34.24-.66.24-1.22.17-1.34-.07-.12-.24-.18-.5-.31z" />
                </svg>
              </a>

              {/* Phone */}
              <a href="tel:+529615937791" aria-label="Llamar" title="Llamar" className="transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-primary">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3.5A1 1 0 013 2.5H6.5a1 1 0 011 1z" />
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:smartecmx.taller@gmail.com" aria-label="Correo" title="Correo" className="transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-primary">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-medium text-sm uppercase tracking-wide text-white/70 mb-4">Horario</h4>

            <ul className="space-y-2 text-sm text-white/70">
              <li>Lunes a Viernes</li>
              <li>9:00 AM – 6:00 PM</li>
              <li className="text-brand-primary font-semibold">Servicio nocturno para flotillas</li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-medium text-sm uppercase tracking-wide text-white/70 mb-4">Ubicación</h4>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20 w-full max-w-xs grayscale hover:grayscale-0 transition duration-300">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1910.0096416456051!2d-93.19328514722545!3d16.775716202460544!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1766623889935!5m2!1sen!2sus" loading="lazy" className="w-full h-40 border-0" />
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-medium text-sm uppercase tracking-wide text-white/70 mb-4">Síguenos</h4>

            <div className="flex gap-5">
              {[
                {
                  href: "https://www.facebook.com/share/14NQ2BCGxgW/?mibextid=wwXIfr",
                  label: "Facebook",
                  path: "M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.6v7A10 10 0 0 0 22 12z",
                },
                {
                  href: "https://www.instagram.com/taller.smartecmx",
                  label: "Instagram",
                  path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm5-1a1 1 0 1 0 1 1 1 1 0 0 0-1-1z",
                },
                {
                  href: "https://www.tiktok.com/@tallersmartecmx",
                  label: "TikTok",
                  path: "M19.3 5.8a5.4 5.4 0 0 1-3.3-1.1v8.2a6.3 6.3 0 1 1-5.4-6.2v3a3.3 3.3 0 1 0 2.4 3.1V2h3a5.4 5.4 0 0 0 3.3 3.8z",
                },
              ].map(({href, label, path}) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-primary">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">© {new Date().getFullYear()} SmarTec. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
