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
      className={clsx("flex flex-col py-5", {
        "bg-slate-50": background === "grey",
        "bg-white": background === "white",
      })}
    >
      <Wrap>
        <h2 className="mb-4 text-2xl font-bold">{heading}</h2>

        {children}
      </Wrap>
    </section>
  );
};
