import type { EducationProps } from "#/components/education";
import type { ExperienceProps } from "#/components/experience";
import type { HeaderProps } from "#/components/header";
import type { MembershipProps } from "#/components/membership";
import type { ProfileProps } from "#/components/profile";
import type { ReferencesProps } from "#/components/references";
import type { SkillsProps } from "#/components/skills";

export interface HomeProps {
  education: EducationProps;
  experience: ExperienceProps;
  header: HeaderProps;
  membership: MembershipProps;
  profile: ProfileProps;
  references: ReferencesProps;
  skills: SkillsProps;
}
