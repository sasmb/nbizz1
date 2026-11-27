"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** The old global footer stays on legacy pages but steps aside for the redesigned routes. */
export function LegacyFooterGate({ children }: { children: ReactNode }) {
  const p = usePathname() || "/";
  const redesigned = ["/ventures", "/studio", "/ai-agents", "/contact"];
  if (p === "/" || redesigned.some((r) => p === r || p.startsWith(r + "/"))) return null;
  return <>{children}</>;
}
