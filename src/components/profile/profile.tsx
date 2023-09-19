import { Section } from "#/components/section";

interface ProfileProps {
  readonly description: string;
  readonly heading: string;
}

export const Profile = ({ description, heading }: ProfileProps) => {
  return (
    <Section heading={heading}>
      <p>{description}</p>
    </Section>
  );
};
