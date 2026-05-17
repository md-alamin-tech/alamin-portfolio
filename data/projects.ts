// ─── PROJECT TYPE ─────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  image: string;   // image path — leave "" for placeholder
  liveUrl: string; // live URL — leave "" to show "Coming Soon"
};

// ─── ADD YOUR PROJECTS HERE ───────────────────────────────────────────────────
// When you finish a project, uncomment one of the example objects below
// and fill in the real title, description, image path, and live URL.

export const frontendProjects: Project[] = [
  // {
  //   title: "React Dashboard",
  //   description: "Custom Next.js dashboard UI with clean layout.",
  //   image: "/projects/react-dashboard.jpg",
  //   liveUrl: "https://your-live-site.com",
  // },
];

export const squarespaceProjects: Project[] = [
  // {
  //   title: "Squarespace Business Site",
  //   description: "Clean Squarespace design for a local brand.",
  //   image: "/projects/sq-business.jpg",
  //   liveUrl: "https://your-live-site.com",
  // },
  {
    title: "Bariatric Psychological Evaluations",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/bariatric-site.png",
    liveUrl: "https://soybean-tuna-853t.squarespace.com/bariatric-psychological-evaluations",
  },

  {
    title: "Bariatric Psychological Evaluations",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/bariatric-site.png",
    liveUrl: "https://soybean-tuna-853t.squarespace.com/bariatric-psychological-evaluations",
  },

  {
    title: "Bariatric Psychological Evaluations",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/bariatric-site.png",
    liveUrl: "https://soybean-tuna-853t.squarespace.com/bariatric-psychological-evaluations",
  },

  {
    title: "Bariatric Psychological Evaluations",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/rental.png",
    liveUrl: "https://www.strixventures.co/",
  },
];

export const wixProjects: Project[] = [
  // {
  //   title: "Wix Portfolio Site",
  //   description: "Modern portfolio built on Wix.",
  //   image: "/projects/wix-portfolio.jpg",
  //   liveUrl: "https://your-live-site.com",
  // },
];

export const cppProjects: Project[] = [
  // {
  //   title: "Data Structures Library",
  //   description: "Core data structures implemented in C++.",
  //   image: "/projects/cpp-lib.jpg",
  //   liveUrl: "https://github.com/your-username/repo",
  // },
];