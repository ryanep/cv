import { Markdown } from "#/components/markdown";

export interface ExperienceItemProps {
  readonly company: string;
  readonly description: string;
  readonly duration: string;
  readonly isDescriptionVisible: boolean;
  readonly summary: string;
  readonly title: string;
}

export const ExperienceItem = ({
  company,
  description,
  duration,
  isDescriptionVisible,
  summary,
  title,
}: ExperienceItemProps) => {
  return (
    <div className="border-b border-b-neutral-400 pb-4 last-of-type:mb-0 last-of-type:border-b-0 last-of-type:pb-0 dark:border-b-neutral-900">
      <div className="mb-1 flex items-center justify-between gap-4">
        <h3>
          <span className="font-semibold">{company}</span>
          <span> - {title}</span>
        </h3>

        <p className="font-mono text-xs font-medium uppercase">{duration}</p>
      </div>

      {isDescriptionVisible ? <Markdown source={description} /> : summary}
    </div>
  );
};
