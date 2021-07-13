import React from 'react';
import Wrap from '../wrap';
import { ReferencesProps } from './types';
import * as styled from './styles';

export const References: React.FC<ReferencesProps> = ({
  title,
  description,
}) => {
  return (
    <styled.References>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <styled.Content>
          <p>{description}</p>
        </styled.Content>
      </Wrap>
    </styled.References>
  );
};

export default References;
