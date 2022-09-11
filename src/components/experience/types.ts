export interface ExperienceProps {
  heading: string;
  items: {
    id: string;
    company: string;
    title: string;
    description: string;
    duration: string;
  }[];
}
