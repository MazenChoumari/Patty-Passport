"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export const OPEN_TOOTY_EVENT = "patty-tooty:open";

export function OpenTootyButton({
  children,
  variant = "outline",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}) {
  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_TOOTY_EVENT))}
    >
      {children}
    </Button>
  );
}
