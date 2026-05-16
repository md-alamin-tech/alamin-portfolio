import Image from "next/image";
import type { Skill } from "@/data/Skills";

export default function SkillBadge({
  skill,
  size = "lg",
}: {
  skill: Skill;
  size?: "sm" | "lg";
}) {
  const boxSize = size === "lg" ? "h-[58px] w-[58px]" : "h-[48px] w-[48px]";
  const iconSize = size === "lg" ? 28 : 24;

  return (
    <div
      className={`${boxSize} flex items-center justify-center rounded-md bg-[#ecf0f3] shadow-[7px_7px_14px_#d1d9e6,-7px_-7px_14px_#ffffff]`}
    >
      {skill.icon ? (
        <Image
          src={skill.icon}
          alt={skill.label}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      ) : (
        skill.customIcon
      )}
    </div>
  );
}