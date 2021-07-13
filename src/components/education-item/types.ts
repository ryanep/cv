export interface EducationItemProps {
  title: string;
  course: string;
  date: string;
  grades: {
    id: string;
    title: string;
    grade: string;
  }[];
}
