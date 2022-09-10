import { Section } from "#/components/section";
import type { ReferencesProps } from "./types";

export const References = ({ heading, description }: ReferencesProps) => {
  return (
    <Section heading={heading} background="grey">
      <p>{description}</p>
    </Section>
  );
};
