import type { EducationItemProps } from "./types";

export const EducationItem = ({
  course,
  date,
  grades,
  title,
}: EducationItemProps) => {
  return (
    <section className="mb-4 last-of-type:mb-0">
      <h3 className="text-lg font-bold">
        {title} <span className="text-base font-normal"> - {course}</span>
      </h3>

      <div className="flex gap-1 text-sm">
        <p className="shrink-0 font-medium uppercase">{date} - </p>
        <p>
          {grades.map((grade) => `${grade.title}: ${grade.grade}`).join(", ")}
        </p>
      </div>
    </section>
  );
};
