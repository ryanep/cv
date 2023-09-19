interface EducationItemProps {
  readonly course: string;
  readonly date: string;
  readonly grades: {
    grade: string;
    id: string;
    title: string;
  }[];
  readonly title: string;
}

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
