import { Education } from "#/components/education";
import { Experience } from "#/components/experience";
import { Header } from "#/components/header";
import { Membership } from "#/components/membership";
import { Profile } from "#/components/profile";
import { References } from "#/components/references";
import { Root } from "#/components/root";
import { Skills } from "#/components/skills";
import type { HomeProps } from "./types";

export const Home = ({
  header,
  profile,
  experience,
  education,
  skills,
  membership,
  references,
}: HomeProps) => {
  return (
    <Root>
      <Header title={header.title} links={header.links} />

      <main>
        <Profile heading={profile.heading} description={profile.description} />
        <Experience heading={experience.heading} items={experience.items} />
        <Education heading={education.heading} items={education.items} />
        <Skills heading={skills.heading} skills={skills.skills} />
        <Membership
          heading={membership.heading}
          description={membership.description}
        />
        <References
          heading={references.heading}
          description={references.description}
        />
      </main>
    </Root>
  );
};
