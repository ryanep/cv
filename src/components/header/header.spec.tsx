import { render, screen } from "@testing-library/react";
import { Header } from "#/components/header";
import { factory } from "#/test-utils/factory";

const createLink = (index: number) => ({
  id: index.toString(),
  title: `__LINK_TITLE_${index}__`,
  url: `__LINK_URL_${index}__`,
});

const defaultTitle = {
  name: "__TITLE_NAME__",
  role: "__TITLE_ROLE__",
};

const defaultLinks = factory(createLink)(2);

test("should render the header element", () => {
  render(<Header links={defaultLinks} title={defaultTitle} />);

  const header = screen.getByRole("banner");

  expect(header).toBeInTheDocument();
});

test("should render the heading and description", () => {
  render(<Header links={defaultLinks} title={defaultTitle} />);

  const heading = screen.getByRole("heading", {
    level: 1,
    name: defaultTitle.name,
  });

  const description = screen.getByText(defaultTitle.role);

  expect(heading).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});

test("should render a link for each provided link", () => {
  render(<Header links={defaultLinks} title={defaultTitle} />);

  const links = screen.getAllByRole("link");

  expect(links).toHaveLength(defaultLinks.length);
});
