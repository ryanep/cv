import { Wrap } from "#/components/wrap";
import type { HeaderProps } from "./types";

export const Header = ({ links, title }: HeaderProps) => {
  return (
    <header className="relative py-5 overflow-hidden bg-primary text-white">
      <Wrap>
        <div className="flex flex-grow items-center z-10">
          <div className="flex-grow">
            <h1 className="text-2xl font-black">{title.name}</h1>
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
