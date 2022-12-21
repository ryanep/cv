import { Markdown } from "#/components/markdown";
import type { ExperienceItemProps } from "./types";

export const ExperienceItem = ({
  company,
  description,
  duration,
  title,
}: ExperienceItemProps) => {
  const heading = `${duration}: ${title} @ ${company}`;

  return (
    <div className="mb-4 last-of-type:mb-0">
      <h3 className="text-base font-bold mb-2">{heading}</h3>

      <Markdown source={description} />
    </div>
  );
};
