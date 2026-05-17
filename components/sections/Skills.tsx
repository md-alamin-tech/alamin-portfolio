import Card from "../Card";
import SkillBadge from "../SkillBadge";
import { primarySkills, secondarySkills } from "../../data/Skills";

export default function Skills() {
  return (
    <Card title="About My Skill">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#606975]">
        Primary Skills On
      </p>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6">
        {primarySkills.map((skill) => (
          <SkillBadge key={skill.label} skill={skill} size="lg" />
        ))}
      </div>

      <p className="mb-5 mt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#606975]">
        Secondary Skills On
      </p>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6">
        {secondarySkills.map((skill) => (
          <SkillBadge key={skill.label} skill={skill} size="sm" />
        ))}
      </div>
    </Card>
  );
}