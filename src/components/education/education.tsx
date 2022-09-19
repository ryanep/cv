import { EducationItem } from "#/components/education-item";
import { Section } from "#/components/section";
import type { EducationProps } from "./types";

export const Education = ({ heading, items }: EducationProps) => {
  return (
    <Section heading={heading}>
      <div>
        {items.map((item) => (
          <EducationItem
            course={item.course}
            date={item.date}
            grades={item.grades}
            key={item.id}
            title={item.title}
          />
        ))}
      </div>
    </Section>
  );
};
