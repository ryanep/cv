import React from 'react';
import { Wrap } from '#/components/wrap';
import * as styled from './styles';
import { ProfileProps } from './types';

export const Profile = ({ title, description }: ProfileProps) => {
  return (
    <styled.Profile>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <styled.Content>
          <p>{description}</p>
        </styled.Content>
      </Wrap>
    </styled.Profile>
  );
};
