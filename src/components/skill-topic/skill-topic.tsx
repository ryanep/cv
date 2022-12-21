import type { SkillTopicProps } from "./types";

export const SkillTopic = ({ skills, title }: SkillTopicProps) => {
  return (
    <section className="mb-4 last-of-type:mb-0">
      <h2 className="text-base font-bold mb-2">{title}</h2>

      <ul>
        {skills.map((skill, index) => (
          <li className="inline" key={skill}>
            {!!index && ", "}
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
