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
      <Header links={header.links} title={header.title} />

      <main>
        <Profile description={profile.description} heading={profile.heading} />
        <Experience heading={experience.heading} items={experience.items} />
        <Education heading={education.heading} items={education.items} />
        <Skills heading={skills.heading} skills={skills.skills} />
        <Membership
          description={membership.description}
          heading={membership.heading}
        />
        <References
          description={references.description}
          heading={references.heading}
        />
      </main>
    </Root>
  );
};
