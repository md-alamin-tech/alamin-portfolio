# Al Amin — Web Designer Portfolio

A modern, responsive personal portfolio website built with **Next.js 16**, **Tailwind CSS**, and **TypeScript**. Features a clean neumorphic design with dynamic project sections, experience timeline, and contact form.

🌐 **Live Site:** [alamin-portfolio-beryl.vercel.app](https://alamin-portfolio-beryl.vercel.app)

---

## ✨ Features

- **Neumorphic UI Design** — Soft shadow-based design system throughout
- **Dynamic Project Sections** — Separate sections for Frontend, Squarespace, Wix, and C/C++ projects with pagination
- **Image Lightbox** — Click project thumbnails to view full screenshots
- **Experience Timeline** — Current and past job tabs with role details and skill badges
- **Skill Badges** — Primary and secondary skill icons using Devicons CDN
- **Social Links** — LinkedIn, WhatsApp, and GitHub icons in the sidebar
- **Contact Form** — Clean contact section with name, phone, email, subject, and message fields
- **Fully Responsive** — Mobile-first layout with sticky sidebar on desktop
- **Auto Deploy** — Connected to Vercel for automatic deployment on every git push

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Vercel | Hosting and auto deployment |
| Devicons CDN | Skill icons |

---

## 📁 Project Structure

```
alamin-portfolio/
├── app/
│   ├── page.tsx              # Main page — imports all components
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Sidebar.tsx           # Profile, social icons, CTA buttons
│   ├── Card.tsx              # Reusable card wrapper
│   ├── SkillBadge.tsx        # Individual skill badge with icon
│   ├── ProjectCard.tsx       # Project card with lightbox
│   ├── ProjectSection.tsx    # Project section with pagination
│   └── sections/
│       ├── AboutMe.tsx
│       ├── Skills.tsx
│       ├── Services.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── data/
│   ├── projects.ts           # All project data (add projects here)
│   └── skills.tsx            # Skill icons and labels
└── public/
    └── projects/             # Project screenshot images
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/md-alamin-tech/alamin-portfolio.git

# Navigate to project folder
cd alamin-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ➕ Adding a New Project

Open `data/projects.ts` and add an object to the correct array:

```ts
export const squarespaceProjects: Project[] = [
  {
    title: "Project Title",
    description: "Short description of the project.",
    image: "/projects/your-screenshot.png",  // place image in public/projects/
    liveUrl: "https://your-live-site.com",   // leave "" for "Coming Soon"
  },
];
```

**Available arrays:**
- `frontendProjects` — React / Next.js projects
- `squarespaceProjects` — Squarespace websites
- `wixProjects` — Wix websites
- `cppProjects` — C / C++ projects

---

## 👔 Adding Experience

Open `components/sections/Experience.tsx` and add a job to the `jobs` array:

```ts
{
  company: "Company Name",
  type: "Full-time",
  duration: "6 mos",
  current: true,   // true = Current tab, false = Past tab
  roles: [
    {
      title: "Your Role",
      period: "Jan 2025 – Present",
      location: "Dhaka, Bangladesh · On-site",
      description: "What you did here.",
      skills: ["Skill 1", "Skill 2"],
    },
  ],
},
```

---

## 🔄 Deployment

This project is connected to **Vercel** with automatic deployment:

```bash
git add .
git commit -m "your message"
git push
```

Vercel will automatically build and deploy within 30–60 seconds.

---

## 📬 Contact

- **LinkedIn:** [md-al-amin-islam](https://www.linkedin.com/in/md-al-amin-islam-575105317/)
- **WhatsApp:** [+880 1324 122820](https://wa.me/8801324122820)
- **GitHub:** [md-alamin-tech](https://github.com/md-alamin-tech)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
