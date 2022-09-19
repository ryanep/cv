import { Section } from "#/components/section";
import type { ReferencesProps } from "./types";

export const References = ({ heading, description }: ReferencesProps) => {
  return (
    <Section background="grey" heading={heading}>
      <p>{description}</p>
    </Section>
  );
};
