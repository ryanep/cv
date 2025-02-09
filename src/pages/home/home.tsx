import { Education } from "#/components/education";
import { Experience } from "#/components/experience";
import { Header } from "#/components/header";
import { Membership } from "#/components/membership";
import { Profile } from "#/components/profile";
import { References } from "#/components/references";
import { Skills } from "#/components/skills";
import { Wrap } from "#/components/wrap";
import type { ComponentProps } from "react";

interface HomePageProps {
  readonly education: ComponentProps<typeof Education>;
  readonly experience: ComponentProps<typeof Experience>;
  readonly header: ComponentProps<typeof Header>;
  readonly membership: ComponentProps<typeof Membership>;
  readonly profile: ComponentProps<typeof Profile>;
  readonly references: ComponentProps<typeof References>;
  readonly skills: ComponentProps<typeof Skills>;
}

export const HomePage = ({
  education,
  experience,
  header,
  membership,
  profile,
  references,
  skills,
}: HomePageProps) => {
  return (
    <>
      <Header links={header.links} title={header.title} />

      <Wrap>
        <main className="max-w-[80ch]">
          <Profile
            description={profile.description}
            heading={profile.heading}
          />

          <div className="hidden">
            <Skills heading={skills.heading} skills={skills.skills} />
          </div>

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
      </Wrap>
    </>
  );
};
