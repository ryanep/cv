export interface EducationProps {
  title: string;
  items: {
    id: string;
    title: string;
    course: string;
    date: string;
    grades: {
      id: string;
      title: string;
      grade: string;
    }[];
  }[];
}
