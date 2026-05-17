"use client";

import { useState } from "react";
import Card from "@/components/Card";

type Role = {
  title: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
};

type Job = {
  company: string;
  type: string;
  duration: string;
  current: boolean;
  roles: Role[];
};

const jobs: Job[] = [
  {
    company: "Softvence Agency",
    type: "Full-time",
    duration: "4 mos",
    current: true,
    roles: [
      {
        title: "Frontend Developer",
        period: "Feb 2026 – Present",
        location: "Mohakhali, Dhaka, Bangladesh · On-site",
        description: "",
        skills: [],
      },
    ],
  },
  {
    company: "WENET",
    type: "Full-time",
    duration: "1 yr 3 mos",
    current: false,
    roles: [
      {
        title: "Junior Network Engineer",
        period: "Dec 2024 – Feb 2026",
        location: "Dhaka, Bangladesh · On-site",
        description:
          "Monitored network performance, assisted with device configurations, and provided technical support to ensure reliable connectivity across the organization.",
        skills: ["Network Systems", "Network Services", "Troubleshooting", "Technical Support"],
      },
    ],
  },
];

type Tab = "current" | "past";

export default function Experience() {
  const [tab, setTab] = useState<Tab>("current");

  const filtered = jobs.filter((j) => (tab === "current" ? j.current : !j.current));

  const tabCls = (t: Tab) =>
    `px-5 py-2 text-[11px] font-bold uppercase tracking-[0.15em] rounded-md transition ${
      tab === t
        ? "bg-[#0098b8] text-white shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]"
        : "bg-[#ecf0f3] text-[#606975] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:bg-[#0098b8] hover:text-white"
    }`;

  return (
    <Card title="Experience">
      {/* Tabs */}
      <div className="mb-6 flex gap-3">
        <button className={tabCls("current")} onClick={() => setTab("current")}>
          Current
        </button>
        <button className={tabCls("past")} onClick={() => setTab("past")}>
          Past
        </button>
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="flex h-[100px] items-center justify-center rounded-lg bg-[#e6ebef] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#aab0b8]">
          {tab === "current" ? "No current job added yet" : "No past jobs added yet"}
        </div>
      ) : (
        <div className="space-y-6">
          {filtered.map((job) => (
            <div
              key={job.company + job.type}
              className="rounded-xl bg-[#ecf0f3] p-5 shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff]"
            >
              {/* Company Header */}
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e2e8f0] shadow-[3px_3px_8px_#d1d9e6,-3px_-3px_8px_#ffffff]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#0098b8" opacity="0.7"/>
                    <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#0098b8" opacity="0.4"/>
                    <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#0098b8" opacity="0.4"/>
                    <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#0098b8" opacity="0.2"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[15px] font-bold text-[#3c3e41]">{job.company}</h3>
                    {job.current && (
                      <span className="rounded-full bg-[#0098b8] px-2 py-[2px] text-[9px] font-bold uppercase tracking-widest text-white">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-[#8a94a0]">
                    {job.type} · {job.duration}
                  </p>
                </div>
              </div>

              {/* Roles */}
              <div className="relative ml-2 space-y-5 border-l-2 border-[#d1d9e6] pl-5">
                {job.roles.map((role, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[22px] top-1 h-3 w-3 rounded-full border-2 border-[#0098b8] bg-[#ecf0f3]" />
                    <h4 className="text-[14px] font-bold text-[#3c3e41]">{role.title}</h4>
                    <p className="mt-[2px] text-[11px] text-[#8a94a0]">{role.period}</p>
                    <p className="text-[11px] text-[#a0a8b4]">{role.location}</p>
                    {role.description && (
                      <p className="mt-2 text-[13px] leading-[1.8] text-[#5f6873]">
                        {role.description}
                      </p>
                    )}
                    {role.skills.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-[#ecf0f3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#0098b8] shadow-[3px_3px_7px_#d1d9e6,-3px_-3px_7px_#ffffff]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}