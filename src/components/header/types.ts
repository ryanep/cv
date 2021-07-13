export interface HeaderProps {
  title: {
    name: string;
    role: string;
  };
  links: {
    id: string;
    title: string;
    url: string;
  }[];
}
