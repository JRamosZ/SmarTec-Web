export function WhySmarTec() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left narrative */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Un taller pensado para tomar mejores decisiones</h2>

            <p className="mt-6 text-lg text-text-muted">En SmarTec no improvisamos. Cada reparación parte de un diagnóstico claro, procesos definidos y comunicación transparente.</p>

            <p className="mt-4 text-lg text-text-muted">Ya sea un vehículo personal o una flotilla completa, nuestro enfoque es reducir errores, tiempos muertos y costos innecesarios.</p>
          </div>

          {/* Right reasons */}
          <div className="bg-white rounded-lg shadow-soft p-10">
            <ul className="space-y-6 text-base">
              <li className="flex gap-3">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Diagnóstico antes de cualquier reparación</span>
              </li>

              <li className="flex gap-3">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Explicaciones claras y evidencia técnica</span>
              </li>

              <li className="flex gap-3">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Procesos pensados para reducir tiempo muerto</span>
              </li>

              <li className="flex gap-3">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Atención especial a flotillas y operación empresarial</span>
              </li>

              <li className="flex gap-3">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Tecnología aplicada, no solo discurso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
