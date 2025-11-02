import type { ReactNode } from "react";
import { TooltipProvider } from "@/providers/TooltipProvider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};
