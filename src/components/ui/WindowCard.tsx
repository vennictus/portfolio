"use client";

import { useState } from "react";
import { Project } from "@/types";

interface WindowCardProps {
  project: Project;
}

export default function WindowCard({ project }: WindowCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="window-card group">
      {/* macOS-style window header */}
      <div className="window-header">
        <div className="flex gap-2">
          <div className="window-dot window-dot-red" />
          <div className="window-dot window-dot-yellow" />
          <div className="window-dot window-dot-green" />
        </div>
        <span className="ml-4 text-xs text-neutral-500 font-mono truncate">
          {project.name.toLowerCase().replace(/\s+/g, "-")}.dev
        </span>
      </div>

      {/* Window content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-neutral-400 mb-4">{project.hook}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono text-neutral-300 bg-neutral-800 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Why it matters */}
        <p className="text-sm text-neutral-500 mb-4">
          <span className="text-red-500 font-medium">Why this matters:</span>{" "}
          {project.whyItMatters}
        </p>

        {/* Expandable section */}
        {(project.designDecisions || project.tradeoffs || project.constraints) && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors flex items-center gap-2 mb-4"
            >
              <span
                className={`transition-transform duration-200 ${
                  isExpanded ? "rotate-90" : ""
                }`}
              >
                →
              </span>
              {isExpanded ? "Less details" : "More details"}
            </button>

            {isExpanded && (
              <div className="space-y-3 pt-4 border-t border-neutral-800 animate-in fade-in duration-200">
                {project.designDecisions && (
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      Design Decisions
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {project.designDecisions}
                    </p>
                  </div>
                )}
                {project.tradeoffs && (
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      Tradeoffs
                    </h4>
                    <p className="text-sm text-neutral-500">{project.tradeoffs}</p>
                  </div>
                )}
                {project.constraints && (
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      Constraints
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {project.constraints}
                    </p>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-neutral-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            GitHub →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-red-500 transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
