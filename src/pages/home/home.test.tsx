import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { HomePage } from ".";
import { cvData } from "../../../data/cv";

test("should render valid html", () => {
  const { container } = render(
    <HomePage
      education={cvData.education}
      experience={cvData.experience}
      header={cvData.header}
      membership={cvData.membership}
      profile={cvData.profile}
      references={cvData.references}
      skills={cvData.skills}
    />
  );

  expect(container).toHTMLValidate();
});

test("should render with no accessibility violations", async () => {
  const { container } = render(
    <HomePage
      education={cvData.education}
      experience={cvData.experience}
      header={cvData.header}
      membership={cvData.membership}
      profile={cvData.profile}
      references={cvData.references}
      skills={cvData.skills}
    />
  );

  const axeResults = await axe(container);

  expect(axeResults).toHaveNoViolations();
});
