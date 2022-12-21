import type { ReactNode } from "react";

export interface SectionProps {
  background?: "grey" | "white";
  children: ReactNode;
  heading: string;
}
