import React from 'react';
import Wrap from '../wrap';
import SkillTopic from '../skill-topic';
import { SkillsProps } from './types';
import * as styled from './styles';

export const Skills: React.FC<SkillsProps> = ({ title, skills }) => {
  return (
    <styled.Skills>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <div>
          {skills.map(skill => (
            <SkillTopic key={skill.id} {...skill} />
          ))}
        </div>
      </Wrap>
    </styled.Skills>
  );
};

export default Skills;
