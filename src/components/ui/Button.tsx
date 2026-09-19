import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-passport-red text-white border-navy hover:bg-passport-red-dark shadow-[3px_3px_0_0_var(--color-brand-navy)] hover:shadow-[1px_1px_0_0_var(--color-brand-navy)] hover:translate-x-[2px] hover:translate-y-[2px]",
  secondary:
    "bg-sun text-navy border-navy hover:bg-sun-dark shadow-[3px_3px_0_0_var(--color-brand-navy)] hover:shadow-[1px_1px_0_0_var(--color-brand-navy)] hover:translate-x-[2px] hover:translate-y-[2px]",
  outline:
    "bg-transparent text-current border-current hover:bg-current/10",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md border-2 px-7 py-3.5 font-shout text-base sm:text-lg tracking-wide uppercase transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-dark";

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
