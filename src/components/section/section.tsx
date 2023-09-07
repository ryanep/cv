import { clsx } from "clsx";
import { Wrap } from "#/components/wrap";
import type { SectionProps } from "./types";

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
