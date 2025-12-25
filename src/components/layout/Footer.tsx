import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/logo.png" alt="SmarTec logo" width={140} height={60} className="self-center" />
            <p className="mt-4 text-sm text-white/80 text-center self-center">Diagnóstico preciso, soluciones reales.</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex gap-4">
              <a href="https://wa.me/529615937791" aria-label="WhatsApp" title="WhatsApp" className="hover:text-brand-primary transition-colors hover:opacity-90" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2C6.5 2 2 6.48 2 12.02c0 2.12.62 4.09 1.69 5.77L2 22l4.37-1.5A10.02 10.02 0 0012.04 22C17.58 22 22 17.52 22 11.98S17.58 2 12.04 2zm0 18.2c-1.6 0-3.12-.42-4.45-1.18l-.32-.18-2.6.9.9-2.54-.2-.34A7.95 7.95 0 014.04 12c0-4.42 3.59-8.02 8-8.02 4.42 0 8 3.6 8 8.02s-3.58 8.2-8 8.2z" />
                  <path d="M16.2 14.1c-.2-.1-1.2-.6-1.4-.6-.2 0-.3 0-.5.2s-.6.6-.9.8c-.2.1-.4.1-.6 0-1-.5-2.1-1.8-2.6-2.6-.2-.3 0-.5.1-.6.1-.1.4-.3.6-.5.2-.2.2-.4.3-.6.1-.2 0-.4-.1-.6-.1-.2-.9-2.1-1.2-2.8-.3-.7-.7-.6-.9-.6-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-.8.8-.8 2.1 0 1.3.9 2.6 1 2.8.1.2 1.6 2.6 3.9 3.6 2.5 1.1 2.5.8 3 1 .5.2 1 0 1.4-.3.4-.3 1.2-1.1 1.4-1.8.2-.7.2-1.3.1-1.4-.1-.1-.6-.2-1-.3z" />
                </svg>
              </a>

              <a href="tel:+529615937791" aria-label="Llamar" title="Llamar" className="hover:text-brand-primary transition-colors hover:opacity-90">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3.5A1 1 0 013 2.5H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58.12.33.06.71-.24 1.01l-2.21 2.2z" />
                </svg>
              </a>

              <a href="mailto:smartecmx.taller@gmail.com" aria-label="Correo" title="Correo" className="hover:text-brand-primary transition-colors hover:opacity-90">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Lunes a Viernes</li>
              <li>9:00 AM – 6:00 PM</li>
              <li className="text-brand-primary font-semibold">Servicio nocturno para flotillas</li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Ubicación</h4>
            <div className="rounded-lg overflow-hidden border border-white/10 w-full max-w">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1910.0096416456051!2d-93.19328514722545!3d16.775716202460544!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1766623889935!5m2!1sen!2sus" loading="lazy" className="w-full h-40"></iframe>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4">Síguenos</h4>

            <div className="flex gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/14NQ2BCGxgW/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" className="hover:text-brand-primary transition-colors hover:opacity-90">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.6v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/taller.smartecmx" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="hover:text-brand-primary transition-colors hover:opacity-90">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm5-1a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@tallersmartecmx?_r=1&_t=ZS-92VEXUK0v9s" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok" className="hover:text-brand-primary transition-colors hover:opacity-90">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.3 5.8a5.4 5.4 0 0 1-3.3-1.1v8.2a6.3 6.3 0 1 1-5.4-6.2v3a3.3 3.3 0 1 0 2.4 3.1V2h3a5.4 5.4 0 0 0 3.3 3.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/60">© {new Date().getFullYear()} SmarTec. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
