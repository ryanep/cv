import React from 'react';
import Wrap from '../wrap';
import { ProfileProps } from './types';
import * as styled from './styles';

export const Profile: React.FC<ProfileProps> = ({ title, description }) => {
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

export default Profile;
