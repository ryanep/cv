import React from 'react';
import { ExperienceItem } from '#/components/experience-item';
import { Wrap } from '#/components/wrap';
import * as styled from './styles';
import { ExperienceProps } from './types';

export const Experience = ({ title, items }: ExperienceProps) => {
  return (
    <styled.Section>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <styled.Content>
          {items.map((item) => (
            <ExperienceItem key={item.id} {...item} />
          ))}
        </styled.Content>
      </Wrap>
    </styled.Section>
  );
};
