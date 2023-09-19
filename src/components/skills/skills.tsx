import { Section } from "#/components/section";
import { SkillTopic } from "#/components/skill-topic";

interface SkillsProps {
  readonly heading: string;
  readonly skills: {
    id: string;
    skills: string[];
    title: string;
  }[];
}

export const Skills = ({ heading, skills }: SkillsProps) => {
  return (
    <Section background="grey" heading={heading}>
      <div className="print:flex print:gap-4 sm:flex sm:gap-4">
        {skills.map((skill) => (
          <SkillTopic
            key={skill.id}
            skills={skill.skills}
            title={skill.title}
          />
        ))}
      </div>
    </Section>
  );
};
