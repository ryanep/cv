import { ExperienceItem } from "#/components/experience-item";
import { Section } from "#/components/section";
import type { ExperienceProps } from "./types";

export const Experience = ({ heading, items }: ExperienceProps) => {
  return (
    <Section heading={heading} background="grey">
      {items.map((item) => (
        <ExperienceItem key={item.id} {...item} />
      ))}
    </Section>
  );
};
