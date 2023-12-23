import { cx } from "classix";
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
      className={cx(
        "flex flex-col py-3",
        background === "grey" && "bg-slate-50",
        background === "white" && "bg-white"
      )}
    >
      <Wrap>
        <h2 className="mb-1 text-lg font-bold">{heading}</h2>

        {children}
      </Wrap>
    </section>
  );
};
