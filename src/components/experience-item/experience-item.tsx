import { Markdown } from "#/components/markdown";

export interface ExperienceItemProps {
  readonly company: string;
  readonly description: string;
  readonly duration: string;
  readonly title: string;
}

export const ExperienceItem = ({
  company,
  description,
  duration,
  title,
}: ExperienceItemProps) => {
  return (
    <div className="mb-4 border-b border-b-neutral-300 pb-4 last-of-type:mb-0 last-of-type:border-b-0 last-of-type:pb-0">
      <div className="mb-2">
        <h3>
          <span className="font-semibold">{company}</span>
          <span> - {title}</span>
        </h3>

        <p className="text-sm font-medium uppercase">{duration}</p>
      </div>

      <Markdown source={description} />
    </div>
  );
};
