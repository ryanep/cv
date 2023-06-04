import type { EducationItemProps } from "./types";

export const EducationItem = ({
  course,
  date,
  grades,
  title,
}: EducationItemProps) => {
  return (
    <section className="mb-4 last-of-type:mb-0">
      <h3 className="font-bold text-lg">
        {title} <span className="font-normal text-base"> - {course}</span>
      </h3>

      <div className="flex gap-1 text-sm">
        <p className="uppercase font-medium shrink-0">{date} - </p>
        <p>
          {grades.map((grade) => `${grade.title}: ${grade.grade}`).join(", ")}
        </p>
      </div>
    </section>
  );
};
