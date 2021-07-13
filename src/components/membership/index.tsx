import React from 'react';
import Wrap from '../wrap';
import { MembershipProps } from './types';
import * as styled from './styles';

export const Membership: React.FC<MembershipProps> = ({
  title,
  description,
}) => {
  return (
    <styled.Membership>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <styled.Content>
          <p>{description}</p>
        </styled.Content>
      </Wrap>
    </styled.Membership>
  );
};

export default Membership;
