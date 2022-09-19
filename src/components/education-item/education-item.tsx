import type { EducationItemProps } from "./types";

export const EducationItem = ({
  title,
  course,
  date,
  grades,
}: EducationItemProps) => {
  const heading = `${date}: ${course} @ ${title}`;

  return (
    <section className="mb-4 last-of-type:mb-0">
      <h2 className="text-base font-bold mb-2">{heading}</h2>

      <ul className="list-disc pl-5">
        {grades.map((grade) => (
          <li key={grade.id}>{`${grade.title}: ${grade.grade}`}</li>
        ))}
      </ul>
    </section>
  );
};
