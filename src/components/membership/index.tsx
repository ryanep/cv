import { Wrap } from "#/components/wrap";
import * as styled from "./styles";
import { MembershipProps } from "./types";

export const Membership = ({ title, description }: MembershipProps) => {
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
