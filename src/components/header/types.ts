export interface HeaderProps {
  links: {
    id: string;
    title: string;
    url: string;
  }[];
  title: {
    name: string;
    role: string;
  };
}
