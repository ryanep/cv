import type { ReactNode } from "react";

interface SectionProps {
  readonly children: ReactNode;
  readonly heading: string;
}

export const Section = ({ children, heading }: SectionProps) => {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col border-b border-neutral-600 py-3 last:border-0">
      <h2 className="mb-2 text-lg font-bold">{heading}</h2>

      {children}
    </section>
  );
};
