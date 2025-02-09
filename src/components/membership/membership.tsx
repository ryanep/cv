import { Section } from "#/components/section";

interface MembershipProps {
  readonly description: string;
  readonly heading: string;
}

export const Membership = ({ description, heading }: MembershipProps) => {
  return (
    <Section heading={heading}>
      <p>{description}</p>
    </Section>
  );
};
