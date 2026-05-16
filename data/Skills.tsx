// ─── SKILL TYPE ───────────────────────────────────────────────────────────────
export type Skill = {
  label: string;
  icon: string | null;
  customIcon?: React.ReactNode;
};

// ─── PRIMARY SKILLS ───────────────────────────────────────────────────────────
export const primarySkills: Skill[] = [
  { label: "JS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "TS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Next",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { label: "CSS",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { label: "WP",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { label: "Node",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

// ─── SECONDARY SKILLS ─────────────────────────────────────────────────────────
// Wix and SQ use inline SVG since they are not in devicons
export const secondarySkills: Skill[] = [
  {
    label: "Wix",
    icon: null,
    customIcon: (
      <svg width="28" height="28" viewBox="0 0 50 50" fill="none">
        <rect width="50" height="50" rx="8" fill="#00AAFF" />
        <text x="25" y="34" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="white">Wix</text>
      </svg>
    ),
  },
  {
    label: "SQ",
    icon: null,
    customIcon: (
      <svg width="28" height="28" viewBox="0 0 50 50" fill="none">
        <rect width="50" height="50" rx="8" fill="#111" />
        <text x="25" y="34" textAnchor="middle" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="white">SQ</text>
      </svg>
    ),
  },
  { label: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",         customIcon: null },
  { label: "C",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",                 customIcon: null },
  { label: "C++",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", customIcon: null },
  { label: "Git",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",             customIcon: null },
];