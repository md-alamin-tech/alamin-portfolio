import Sidebar from "@/components/Sidebar";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ProjectSection from "@/components/ProjectSection";
import {
  frontendProjects,
  squarespaceProjects,
  wixProjects,
  cppProjects,
} from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ecf0f3] font-sans text-[#3c3e41]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-14 px-6 py-14 lg:grid-cols-[42%_58%] lg:px-10">

        <Sidebar />

        <div className="space-y-10">
          <AboutMe />
          <Skills />
          <Services />
          <Experience />

          <ProjectSection
            id="projects-frontend"
            title="Frontend Projects"
            projects={frontendProjects}
            emptyMessage="Frontend projects coming soon"
          />
          <ProjectSection
            id="projects-squarespace"
            title="Squarespace Projects"
            projects={squarespaceProjects}
            emptyMessage="Squarespace projects coming soon"
          />
          <ProjectSection
            id="projects-wix"
            title="Wix Projects"
            projects={wixProjects}
            emptyMessage="Wix projects coming soon"
          />
          <ProjectSection
            id="projects-cpp"
            title="C / C++ Projects"
            projects={cppProjects}
            emptyMessage="C / C++ projects coming soon"
          />

          <Contact />
        </div>

      </div>
    </main>
  );
}