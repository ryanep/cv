import React from 'react';
import { SkillTopicProps } from './types';
import * as styled from './styles';

export const SkillTopic: React.FC<SkillTopicProps> = ({ title, skills }) => {
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

export default SkillTopic;
