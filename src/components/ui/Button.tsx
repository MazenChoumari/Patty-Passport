import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-passport-red text-white hover:bg-passport-red-dark shadow-md shadow-passport-red/20",
  secondary:
    "bg-sun text-navy hover:bg-sun-dark shadow-md shadow-sun/30",
  outline:
    "bg-white/90 text-navy border-2 border-navy/15 hover:border-sky-dark hover:text-sky-dark",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading font-semibold text-sm sm:text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-dark";

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
