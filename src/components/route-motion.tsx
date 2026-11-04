"use client";

import { usePathname } from "next/navigation";
import { ViewTransition, type ReactNode } from "react";

export function RouteMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <ViewTransition
      key={pathname}
      name="ea-content"
      default="none"
      enter="ea-route"
      exit="ea-route"
      share="ea-route"
    >
      <div>{children}</div>
    </ViewTransition>
  );
}
