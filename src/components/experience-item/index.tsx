import { Markdown } from "#/components/markdown";
import * as styled from "./styles";
import { ExperienceItemProps } from "./types";

export const ExperienceItem = ({
  title,
  company,
  duration,
  description,
}: ExperienceItemProps) => {
  const heading = `${duration}: ${title} @ ${company}`;
  return (
    <styled.Item>
      <styled.Heading>{heading}</styled.Heading>
      <Markdown source={description} />
    </styled.Item>
  );
};
