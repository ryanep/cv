export interface ExperienceProps {
  title: string;
  items: {
    id: string;
    company: string;
    title: string;
    description: string;
    duration: string;
  }[];
}
