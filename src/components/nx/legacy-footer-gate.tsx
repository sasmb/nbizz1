"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** The old global footer stays on legacy pages but steps aside for the redesigned routes. */
export function LegacyFooterGate({ children }: { children: ReactNode }) {
  const p = usePathname() || "/";
  if (p === "/" || p.startsWith("/ventures") || p.startsWith("/studio")) return null;
  return <>{children}</>;
}
