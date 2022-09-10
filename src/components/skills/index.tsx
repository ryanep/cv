import { SkillTopic } from "#/components/skill-topic";
import { Wrap } from "#/components/wrap";
import * as styled from "./styles";
import { SkillsProps } from "./types";

export const Skills = ({ title, skills }: SkillsProps) => {
  return (
    <styled.Skills>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <div>
          {skills.map((skill) => (
            <SkillTopic key={skill.id} {...skill} />
          ))}
        </div>
      </Wrap>
    </styled.Skills>
  );
};
