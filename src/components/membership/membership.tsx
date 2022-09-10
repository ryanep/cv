import { Section } from "#/components/section";
import type { MembershipProps } from "./types";

export const Membership = ({ heading, description }: MembershipProps) => {
  return (
    <Section heading={heading}>
      <p>{description}</p>
    </Section>
  );
};
