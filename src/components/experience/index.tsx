import React from 'react';
import Wrap from '../wrap';
import ExperienceItem from '../experience-item';
import { ExperienceProps } from './types';
import * as styled from './styles';

export const Experience: React.FC<ExperienceProps> = ({ title, items }) => {
  return (
    <styled.Section>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <styled.Content>
          {items.map(item => (
            <ExperienceItem key={item.id} {...item} />
          ))}
        </styled.Content>
      </Wrap>
    </styled.Section>
  );
};

export default Experience;
