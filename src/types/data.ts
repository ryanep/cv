import { HeaderProps } from '../components/header/types';
import { ProfileProps } from '../components/profile/types';
import { ExperienceProps } from '../components/experience/types';
import { EducationProps } from '../components/education/types';
import { SkillsProps } from '../components/skills/types';
import { MembershipProps } from '../components/membership/types';
import { ReferencesProps } from '../components/references/types';

export interface Data {
  header: HeaderProps;
  profile: ProfileProps;
  experience: ExperienceProps;
  education: EducationProps;
  skills: SkillsProps;
  membership: MembershipProps;
  references: ReferencesProps;
}
