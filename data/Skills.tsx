import React from "react";

export type Skill = {
  label: string;
  icon: string | null;
  customIcon?: React.ReactNode;
};

// ─── PRIMARY SKILLS ───────────────────────────────────────────────────────────
export const primarySkills: Skill[] = [
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
  { label: "C",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",                 customIcon: null },
  { label: "C++",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", customIcon: null },
  { label: "Git",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",             customIcon: null },
 
  
  { label: "Figma",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",         customIcon: null },
 
];

// ─── SECONDARY SKILLS ─────────────────────────────────────────────────────────
export const secondarySkills: Skill[] = [
  { label: "HTML",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",                customIcon: null },
  { label: "CSS",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",                  customIcon: null },
  { label: "Tailwind",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",    customIcon: null },
  { label: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",       customIcon: null },
  { label: "JS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",     customIcon: null },
  { label: "React",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",               customIcon: null },
];