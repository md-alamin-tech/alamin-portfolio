// components/ProjectSection.tsx
"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Props = {
  id: string;
  title: string;
  projects: Project[];
  emptyMessage: string;
};

export default function ProjectSection({ id, title, projects, emptyMessage }: Props) {
  const [page, setPage] = useState(0);
  const perPage    = 2;
  const totalPages = Math.max(1, Math.ceil(projects.length / perPage));
  const visible    = projects.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      id={id}
      className="rounded-xl bg-[#ecf0f3] p-7 shadow-[10px_10px_25px_#d1d9e6,-10px_-10px_25px_#ffffff]"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[22px] font-bold text-[#3c3e41]">{title}</h2>

        {projects.length > perPage && (
          <div className="flex gap-3">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="h-10 w-10 rounded-md bg-[#ecf0f3] text-[#606975] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] transition hover:bg-[#0098b8] hover:text-white disabled:opacity-40"
            >
              ‹
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="h-10 w-10 rounded-md bg-[#ecf0f3] text-[#606975] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] transition hover:bg-[#0098b8] hover:text-white disabled:opacity-40"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <div className="mb-6 h-px w-full bg-[#c9cfd6]" />

      {/* Empty state */}
      {projects.length === 0 ? (
        <div className="flex h-[120px] items-center justify-center rounded-lg bg-[#e6ebef] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#aab0b8]">
          {emptyMessage}
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}

      {/* Pagination dots */}
      {projects.length > perPage && (
        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-6 bg-[#0098b8]" : "w-2 bg-[#c9cfd6]"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}