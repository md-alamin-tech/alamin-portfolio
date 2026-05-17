import { Skill } from "@/data/Skills";

export default function SkillBadge({ skill, size = "lg" }: { skill: Skill; size?: "lg" | "sm" }) {
  const imgSize = size === "lg" ? "h-8 w-8" : "h-7 w-7";
  const padding = size === "lg" ? "py-4" : "py-3";

  return (
    <div
      className={`group flex flex-col items-center justify-center gap-2 rounded-xl bg-[#ecf0f3] px-2 ${padding} shadow-[7px_7px_14px_#d1d9e6,-7px_-7px_14px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] cursor-pointer`}
    >
      {/* Icon wrapper — spins + scales on hover */}
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
        {skill.customIcon ?? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={skill.icon!}
            alt={skill.label}
            className={`${imgSize} object-contain`}
          />
        )}
      </div>

      {/* Label — color changes on hover */}
      <span className="text-[12px] font-bold text-[#0098b8] transition-all duration-300 group-hover:text-[#007a94]">
        {skill.label}
      </span>
    </div>
  );
}