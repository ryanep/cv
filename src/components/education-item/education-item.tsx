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
    <section className="mb-2 flex items-center justify-between gap-4 last-of-type:mb-0">
      <h3 className="font-bold">
        {title} -{" "}
        <span className="text-base font-normal">
          {course}: {grades[0].grade}
        </span>
      </h3>

      <p className="shrink-0 font-mono text-xs font-medium uppercase">{date}</p>
    </section>
  );
};
