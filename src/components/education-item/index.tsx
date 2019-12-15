import React from 'react';
import { EducationItemProps } from './types';
import * as styled from './styles';

export const EducationItem: React.FC<EducationItemProps> = ({
  title,
  course,
  date,
  grades,
}) => {
  const heading = `${date}: ${course} @ ${title}`;
  return (
    <styled.Education>
      <styled.Title>{heading}</styled.Title>
      <styled.Grades>
        {grades.map(grade => {
          const gradeTitle = `${grade.title}: ${grade.grade}`;
          return <li key={grade.id}>{gradeTitle}</li>;
        })}
      </styled.Grades>
    </styled.Education>
  );
};

export default EducationItem;
