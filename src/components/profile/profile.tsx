import { Section } from "#/components/section";
import type { ProfileProps } from "./types";

export const Profile = ({ description, heading }: ProfileProps) => {
  return (
    <Section heading={heading}>
      <p>{description}</p>
    </Section>
  );
};
