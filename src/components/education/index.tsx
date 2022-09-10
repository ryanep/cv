import { EducationItem } from "#/components/education-item";
import { Wrap } from "#/components/wrap";
import * as styled from "./styles";
import { EducationProps } from "./types";

export const Education = ({ title, items }: EducationProps) => {
  return (
    <styled.Education>
      <Wrap>
        <styled.Heading>{title}</styled.Heading>
        <styled.Content>
          {items.map((item) => (
            <EducationItem key={item.id} {...item} />
          ))}
        </styled.Content>
      </Wrap>
    </styled.Education>
  );
};
