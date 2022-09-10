import { SkillTopic } from "#/components/skill-topic";
import { Section } from "#/components/section";
import type { SkillsProps } from "./types";

export const Skills = ({ heading, skills }: SkillsProps) => {
  return (
    <Section heading={heading} background="grey">
      <div>
        {skills.map((skill) => (
          <SkillTopic key={skill.id} {...skill} />
        ))}
      </div>
    </Section>
  );
};
