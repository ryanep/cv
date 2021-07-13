import * as styled from './styles';
import { EducationItemProps } from './types';

export const EducationItem = ({
  title,
  course,
  date,
  grades,
}: EducationItemProps) => {
  const heading = `${date}: ${course} @ ${title}`;
  return (
    <styled.Education>
      <styled.Title>{heading}</styled.Title>
      <styled.Grades>
        {grades.map((grade) => {
          const gradeTitle = `${grade.title}: ${grade.grade}`;
          return <li key={grade.id}>{gradeTitle}</li>;
        })}
      </styled.Grades>
    </styled.Education>
  );
};
