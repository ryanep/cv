import type { EducationProps } from "#/components/education/types";
import type { ExperienceProps } from "#/components/experience/types";
import type { HeaderProps } from "#/components/header/types";
import type { MembershipProps } from "#/components/membership/types";
import type { ProfileProps } from "#/components/profile/types";
import type { ReferencesProps } from "#/components/references/types";
import type { SkillsProps } from "#/components/skills/types";

export interface HomeProps {
  header: HeaderProps;
  profile: ProfileProps;
  experience: ExperienceProps;
  education: EducationProps;
  skills: SkillsProps;
  membership: MembershipProps;
  references: ReferencesProps;
}
