import { Markdown } from "#/components/markdown";
import type { ExperienceItemProps } from "./types";

export const ExperienceItem = ({
  company,
  description,
  duration,
  title,
}: ExperienceItemProps) => {
  return (
    <div className="mb-4 last-of-type:mb-0 border-b-neutral-300 pb-4 border-b-[1px] last-of-type:border-b-0 last-of-type:pb-0">
      <div className="mb-2">
        <h3 className="font-bold text-lg">
          {company} <span className="font-normal text-base"> - {title}</span>
        </h3>

        <p className="text-sm uppercase font-medium">{duration}</p>
      </div>

      <Markdown source={description} />
    </div>
  );
};
