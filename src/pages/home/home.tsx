import { Education } from "#/components/education";
import { Experience } from "#/components/experience";
import { Header } from "#/components/header";
import { Membership } from "#/components/membership";
import { Profile } from "#/components/profile";
import { References } from "#/components/references";
import { Root } from "#/components/root";
import { Skills } from "#/components/skills";
import type { ComponentProps } from "react";

interface HomeProps {
  readonly education: ComponentProps<typeof Education>;
  readonly experience: ComponentProps<typeof Experience>;
  readonly header: ComponentProps<typeof Header>;
  readonly membership: ComponentProps<typeof Membership>;
  readonly profile: ComponentProps<typeof Profile>;
  readonly references: ComponentProps<typeof References>;
  readonly skills: ComponentProps<typeof Skills>;
}

export const Home = ({
  education,
  experience,
  header,
  membership,
  profile,
  references,
  skills,
}: HomeProps) => {
  return (
    <Root>
      <Header links={header.links} title={header.title} />

      <main>
        <Profile description={profile.description} heading={profile.heading} />
        <Skills heading={skills.heading} skills={skills.skills} />
        <Experience heading={experience.heading} items={experience.items} />
        <Education heading={education.heading} items={education.items} />
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
