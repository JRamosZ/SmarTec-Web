export function Process() {
  return (
    <section className="py-20 bg-bg-section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestro proceso</h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">Un proceso claro, profesional y conectado digitalmente para tu comodidad.</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Contacto digital */}
          <div className="bg-white p-6 rounded-lg shadow-soft border-2 border-brand-primary">
            <span className="text-brand-primary font-bold text-lg">01</span>
            <h3 className="mt-4 text-xl font-semibold">Contacto rápido</h3>
            <p className="mt-3 text-text-muted">Nuestro bot de WhatsApp te ayuda a agendar citas, recibir cotizaciones, promociones y seguimiento de tu vehículo al instante.</p>
          </div>

          {/* Step 2: Diagnóstico */}
          <div className="bg-white p-6 rounded-lg shadow-soft">
            <span className="text-brand-primary font-bold text-lg">02</span>
            <h3 className="mt-4 text-xl font-semibold">Diagnóstico preciso</h3>
            <p className="mt-3 text-text-muted">Analizamos el vehículo con herramientas avanzadas antes de intervenir. Explicamos el problema, la solución y los costos sin letras pequeñas.</p>
          </div>

          {/* Step 3: Ejecución */}
          <div className="bg-white p-6 rounded-lg shadow-soft">
            <span className="text-brand-primary font-bold text-lg">03</span>
            <h3 className="mt-4 text-xl font-semibold">Ejecución profesional</h3>
            <p className="mt-3 text-text-muted">Realizamos la reparación con procesos controlados y evidencia técnica que puedes consultar a través de WhatsApp.</p>
          </div>

          {/* Step 4: Entrega */}
          <div className="bg-white p-6 rounded-lg shadow-soft">
            <span className="text-brand-primary font-bold text-lg">04</span>
            <h3 className="mt-4 text-xl font-semibold">Entrega confiable</h3>
            <p className="mt-3 text-text-muted">Tu vehículo se entrega probado, documentado y listo para operar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
