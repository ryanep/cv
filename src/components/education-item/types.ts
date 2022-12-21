export interface EducationItemProps {
  course: string;
  date: string;
  grades: {
    grade: string;
    id: string;
    title: string;
  }[];
  title: string;
}
