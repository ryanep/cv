import { EducationItem } from "#/components/education-item";
import { Section } from "#/components/section";

interface EducationProps {
  readonly heading: string;
  readonly items: {
    course: string;
    date: string;
    grades: {
      grade: string;
      id: string;
      title: string;
    }[];
    id: string;
    title: string;
  }[];
}

export const Education = ({ heading, items }: EducationProps) => {
  return (
    <Section heading={heading}>
      {items.map((item) => (
        <EducationItem
          course={item.course}
          date={item.date}
          grades={item.grades}
          key={item.id}
          title={item.title}
        />
      ))}
    </Section>
  );
};
