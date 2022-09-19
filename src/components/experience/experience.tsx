import { ExperienceItem } from "#/components/experience-item";
import { Section } from "#/components/section";
import type { ExperienceProps } from "./types";

export const Experience = ({ heading, items }: ExperienceProps) => {
  return (
    <Section background="grey" heading={heading}>
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
