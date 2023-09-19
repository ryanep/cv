import { clsx } from "clsx";
import { Wrap } from "#/components/wrap";
import type { ReactNode } from "react";

interface SectionProps {
  readonly background?: "grey" | "white";
  readonly children: ReactNode;
  readonly heading: string;
}

export const Section = ({
  background = "white",
  children,
  heading,
}: SectionProps) => {
  return (
    <section
      className={clsx("flex flex-col py-3", {
        "bg-slate-50": background === "grey",
        "bg-white": background === "white",
      })}
    >
      <Wrap>
        <h2 className="mb-1 text-lg font-bold">{heading}</h2>

        {children}
      </Wrap>
    </section>
  );
};
