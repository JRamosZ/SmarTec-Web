import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
};

export function Button({children, href, variant = "primary", className}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display font-semibold transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-cta hover:shadow-lg",
    secondary: "border border-brand-border text-brand-dark hover:bg-brand-light hover:-translate-y-0.5",
    whatsapp: "bg-whatsapp text-white hover:opacity-90 hover:-translate-y-0.5",
  };

  return (
    <a href={href} className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </a>
  );
}
