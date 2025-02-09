import { ExperienceItem } from "#/components/experience-item";
import { Section } from "#/components/section";

interface ExperienceProps {
  readonly heading: string;
  readonly items: {
    company: string;
    description: string;
    duration: string;
    id: string;
    isDescriptionVisible: boolean;
    summary: string;
    title: string;
  }[];
}

export const Experience = ({ heading, items }: ExperienceProps) => {
  return (
    <Section heading={heading}>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <ExperienceItem
            company={item.company}
            description={item.description}
            duration={item.duration}
            isDescriptionVisible={item.isDescriptionVisible}
            key={item.id}
            summary={item.summary}
            title={item.title}
          />
        ))}
      </div>
    </Section>
  );
};
