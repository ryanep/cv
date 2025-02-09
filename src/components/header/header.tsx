import { Wrap } from "#/components/wrap";

interface HeaderProps {
  readonly links: {
    id: string;
    title: string;
    url: string;
  }[];
  readonly title: {
    name: string;
    role: string;
  };
}

export const Header = ({ links, title }: HeaderProps) => {
  return (
    <header className="relative overflow-hidden bg-primary py-4 dark:bg-[#3c1f1f] print:py-0">
      <Wrap>
        <div className="z-10 flex grow items-center">
          <div className="grow">
            <h1 className="text-2xl font-bold">{title.name}</h1>
            <p className="text-lg">{title.role}</p>
          </div>
          <div>
            {links.map((link) => (
              <a
                className="block hover:underline"
                href={link.url}
                key={link.id}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </Wrap>
    </header>
  );
};
