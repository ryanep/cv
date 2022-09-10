import { Section } from "#/components/section";
import type { ProfileProps } from "./types";

export const Profile = ({ heading, description }: ProfileProps) => {
  return (
    <Section heading={heading}>
      <p>{description}</p>
    </Section>
  );
};
