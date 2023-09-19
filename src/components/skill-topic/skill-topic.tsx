interface SkillTopicProps {
  readonly skills: string[];
  readonly title: string;
}

export const SkillTopic = ({ skills, title }: SkillTopicProps) => {
  return (
    <section className="mb-4 last-of-type:mb-0 print:mb-0 sm:mb-0">
      <h2 className="mb-2 text-base font-bold">{title}</h2>

      <ul>
        {skills.map((skill, index) => (
          <li className="inline" key={skill}>
            {Boolean(index) && ", "}
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
