import {processSteps} from "../../data/processSteps";
import {FadeIn} from "../ui/FadeIn";
import {FadeInOnScroll} from "../ui/FadeInOnScroll";
import StepCard from "../ui/StepCard";

export function Process() {
  return (
    <section id="process" className="py-20 bg-bg-section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInOnScroll delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold">Nuestro proceso</h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={400}>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">Un proceso claro, profesional y conectado digitalmente para tu comodidad.</p>
          </FadeInOnScroll>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {processSteps.map((s, i) => (
            <FadeIn key={s.id} index={i}>
              <StepCard step={s.step} title={s.title}>
                {s.description}
              </StepCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
