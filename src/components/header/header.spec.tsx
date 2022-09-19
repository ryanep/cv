import { render, screen } from "@testing-library/react";
import { Header } from "#/components/header";

describe("<Header />", () => {
  const defaultTitle = {
    name: "__TITLE_NAME__",
    role: "__TITLE_ROLE__",
  };

  const defaultLinks = [
    {
      id: "1",
      title: "__LINK_TITLE__",
      url: "__LINK_URL__",
    },
  ];

  it("should render header element", () => {
    render(<Header links={defaultLinks} title={defaultTitle} />);

    const header = screen.getByRole("banner");

    expect(header).toBeInTheDocument();
  });
});
