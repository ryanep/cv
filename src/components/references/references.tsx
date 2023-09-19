import { Section } from "#/components/section";

interface ReferencesProps {
  readonly description: string;
  readonly heading: string;
}

export const References = ({ description, heading }: ReferencesProps) => {
  return (
    <Section background="grey" heading={heading}>
      <p>{description}</p>
    </Section>
  );
};
