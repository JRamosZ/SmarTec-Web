import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
};

export function Button({children, href, variant = "primary", className}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-cta focus:ring-brand-primary",
    secondary: "border border-ui-300 text-brand-dark hover:bg-ui-100 focus:ring-ui-300",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
  };

  return (
    <a href={href} className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </a>
  );
}
