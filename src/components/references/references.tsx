import { Section } from "#/components/section";
import type { ReferencesProps } from "./types";

export const References = ({ description, heading }: ReferencesProps) => {
  return (
    <Section background="grey" heading={heading}>
      <p>{description}</p>
    </Section>
  );
};
