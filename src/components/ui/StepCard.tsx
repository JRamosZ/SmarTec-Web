import React from "react";

type StepCardProps = {
  step: string | number;
  title: string;
  children: React.ReactNode;
};

export default function StepCard({step, title, children}: StepCardProps) {
  return (
    <div className="bg-white border-2 border-white p-6 rounded-lg shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-2 hover:border-brand-primary h-full flex flex-col">
      <span className="text-brand-primary font-bold text-lg">{step}</span>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-text-muted flex-1">{children}</p>
    </div>
  );
}
