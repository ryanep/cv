import React from 'react';
import { Wrap } from '#/components/wrap';
import * as styled from './styles';
import { ReferencesProps } from './types';

export const References = ({ title, description }: ReferencesProps) => {
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
