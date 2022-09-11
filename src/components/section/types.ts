import type { ReactNode } from "react";

export interface SectionProps {
  heading: string;
  children: ReactNode;
  background?: "grey" | "white";
}
