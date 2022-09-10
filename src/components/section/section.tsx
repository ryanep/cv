import { clsx } from "clsx";
import { Wrap } from "#/components/wrap";
import type { SectionProps } from "./types";

export const Section = ({
  heading,
  children,
  background = "white",
}: SectionProps) => {
  return (
    <section
      className={clsx("flex flex-col py-5", {
        "bg-slate-50": background === "grey",
        "bg-white": background === "white",
      })}
    >
      <Wrap>
        <h2 className="mb-4 text-2xl font-black">{heading}</h2>

        {children}
      </Wrap>
    </section>
  );
};
