import React from 'react';
import { ExperienceItemProps } from './types';
import Markdown from '../markdown';
import * as styled from './styles';

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  description,
}) => {
  const heading = `${duration}: ${title} @ ${company}`;
  return (
    <styled.Item>
      <styled.Heading>{heading}</styled.Heading>
      <Markdown source={description} />
    </styled.Item>
  );
};

export default ExperienceItem;
