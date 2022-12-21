export interface EducationProps {
  heading: string;
  items: {
    course: string;
    date: string;
    grades: {
      grade: string;
      id: string;
      title: string;
    }[];
    id: string;
    title: string;
  }[];
}
