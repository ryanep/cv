import type { SkillTopicProps } from "./types";

export const SkillTopic = ({ title, skills }: SkillTopicProps) => {
  return (
    <section className="mb-4 last-of-type:mb-0">
      <h2 className="text-base font-bold mb-2">{title}</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={skill} className="inline">
            {!!index && ", "}
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
