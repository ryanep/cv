import { ExperienceItem } from "#/components/experience-item";
import { Section } from "#/components/section";

interface ExperienceProps {
  readonly heading: string;
  readonly items: {
    company: string;
    description: string;
    duration: string;
    id: string;
    title: string;
  }[];
}

export const Experience = ({ heading, items }: ExperienceProps) => {
  return (
    <Section background="white" heading={heading}>
      {items.map((item) => (
        <ExperienceItem
          company={item.company}
          description={item.description}
          duration={item.duration}
          key={item.id}
          title={item.title}
        />
      ))}
    </Section>
  );
};
