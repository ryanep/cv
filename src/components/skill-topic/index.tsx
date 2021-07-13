import * as styled from './styles';
import { SkillTopicProps } from './types';

export const SkillTopic = ({ title, skills }: SkillTopicProps) => {
  return (
    <styled.Topic>
      <styled.Title>{title}</styled.Title>
      <ul>
        {skills.map((skill, index) => (
          <styled.Skill key={skill}>
            {!!index && ', '}
            {skill}
          </styled.Skill>
        ))}
      </ul>
    </styled.Topic>
  );
};
