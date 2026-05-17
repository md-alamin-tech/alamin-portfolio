"use client";

import { useState } from "react";
import { Project } from "@/data/projects";

const btnCls =
  "rounded-md bg-[#ecf0f3] px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#0098b8] shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] transition hover:bg-[#0098b8] hover:text-white";

export default function ProjectCard({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="rounded-lg bg-[#ecf0f3] overflow-hidden shadow-[7px_7px_16px_#d1d9e6,-7px_-7px_16px_#ffffff]">

        {/* Thumbnail */}
        {project.image ? (
          <div
            className="relative cursor-zoom-in overflow-hidden"
            onClick={() => setLightbox(true)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[160px] object-cover object-top transition hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition">
              <span className="opacity-0 hover:opacity-100 text-white text-[11px] font-bold uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full transition">
                View Full
              </span>
            </div>
          </div>
        ) : (
          <div className="flex h-[160px] items-center justify-center bg-[#e6ebef] text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8a94a0]">
            Project Image
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          <h3 className="text-[15px] font-bold text-[#3c3e41]">{project.title}</h3>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={btnCls}>
                View Live Project
              </a>
            ) : (
              <span className="cursor-not-allowed select-none rounded-md bg-[#ecf0f3] px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#b0b8c1] shadow-[inset_3px_3px_7px_#d1d9e6,inset_-3px_-3px_7px_#ffffff]">
                Coming Soon
              </span>
            )}
            <a href="#contact" className={btnCls}>
              Contact For This Design
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setLightbox(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(false)}
              className="absolute -top-10 right-0 text-white text-[13px] font-bold uppercase tracking-widest hover:text-[#0098b8] transition"
            >
              ✕ Close
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}