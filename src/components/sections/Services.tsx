import {Button} from "@/components/ui/Button";

export function Services() {
  return (
    <section className="py-20 bg-bg-page">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros servicios</h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">Taller mecánico con enfoque tecnológico. Atendemos vehículos particulares y flotillas empresariales con diagnósticos claros, procesos eficientes y atención confiable.</p>
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Particulares */}
          <div className="bg-white rounded-lg shadow-soft p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">Particulares</h3>

            <ul className="space-y-3 text-base flex-1">
              <li>Diagnóstico avanzado</li>
              <li>Frenos y seguridad</li>
              <li>Afinación inteligente</li>
              <li>Mantenimiento preventivo</li>
              <li>Reparación mecánica</li>
            </ul>

            <div className="mt-8">
              <Button href="https://wa.me/529615937791" variant="whatsapp">
                Agenda por WhatsApp
              </Button>
            </div>
          </div>

          {/* Flotillas */}
          <div className="bg-white rounded-lg shadow-soft p-8 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">Flotillas</h3>

            <ul className="space-y-3 text-base flex-1">
              <li>Mantenimiento preventivo de flotillas</li>
              <li>Diagnóstico por unidad</li>
              <li>Atención nocturna</li>
              <li>Reparación correctiva prioritaria</li>
              <li>Control y trazabilidad</li>
            </ul>

            <div className="mt-8">
              <Button href="tel:+529615937791" variant="secondary">
                Atención a flotillas
              </Button>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="mt-16 bg-bg-section rounded-lg p-8">
          <h4 className="text-xl font-semibold mb-6 text-center">¿Por qué SmarTec?</h4>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <li>✔ Diagnóstico antes de reparar</li>
            <li>✔ Evidencia técnica, no suposiciones</li>
            <li>✔ Transparencia total en costos</li>
            <li>✔ Enfoque en reducción de tiempo muerto</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
