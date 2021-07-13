import React from 'react';
import Wrap from '../wrap';
import EducationItem from '../education-item';
import { EducationProps } from './types';
import * as styled from './styles';

export const Education: React.FC<EducationProps> = ({ title, items }) => {
  return (
    <styled.Education>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <styled.Content>
          {items.map(item => (
            <EducationItem key={item.id} {...item} />
          ))}
        </styled.Content>
      </Wrap>
    </styled.Education>
  );
};

export default Education;
