export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "contact",
    step: "01",
    title: "Contacto rápido",
    description:
      "Nuestro bot de WhatsApp te ayuda a agendar citas, recibir cotizaciones, promociones y seguimiento de tu vehículo al instante.",
  },
  {
    id: "diagnostic",
    step: "02",
    title: "Diagnóstico preciso",
    description:
      "Analizamos el vehículo con herramientas avanzadas antes de intervenir. Explicamos el problema, la solución y los costos sin letras pequeñas.",
  },
  {
    id: "execution",
    step: "03",
    title: "Ejecución profesional",
    description:
      "Realizamos la reparación con procesos controlados y evidencia técnica que puedes consultar a través de WhatsApp.",
  },
  {
    id: "delivery",
    step: "04",
    title: "Entrega confiable",
    description: "Tu vehículo se entrega probado, documentado y listo para operar.",
  },
];

export default processSteps;
