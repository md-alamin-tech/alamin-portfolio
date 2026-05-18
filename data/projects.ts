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
  
  {
    title: "Event Promotion / Entertainment Website",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/Event Promotion  Entertainment Website.png",
    liveUrl: "https://www.beehivepresents.com/",
  },

 {
    title: "Precious Metals",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/Precious -Metals.png",
    liveUrl: "https://www.prosperitymetals.org/",
  },

  {
    title: "Education / Online Certificate Program Website",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/Education-Online-Certificate-Program.png",
    liveUrl: "https://perch-turkey-pxys.squarespace.com/",
  },

  {
    title: "Bariatric Psychological Evaluations",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/bariatric-site.png",
    liveUrl: "https://soybean-tuna-853t.squarespace.com/bariatric-psychological-evaluations",
  },

  {
    title: "Pool Barrier Certification",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/Pool-Barrier-Certification.png",
    liveUrl: "https://poolbarriercertification.squarespace.com/home_landing",
  },

  {
    title: "Motivational Speaker",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/Motivational Speaker.png",
    liveUrl: "https://www.minameetings.com/",
  },

  
  {
    title: "Mental Health Therapy",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/Mental Health Therapy.png",
    liveUrl: "https://www.aspenshealingarts.org/",
  },

  {
    title: "Rental",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/rental.png",
    liveUrl: "https://www.strixventures.co/",
  },

  {
    title: "Therapy",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/Therapy.png",
    liveUrl: "https://www.paramaspacekeeper.com",
  },

   {
    title: "Real Estate Investment",
    description: "A professional Squarespace website for bariatric psychological evaluation services.",
    image: "/projects/Real-Estate-Investment.png",
    liveUrl: "https://plane-mandolin-36yj.squarespace.com/",
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