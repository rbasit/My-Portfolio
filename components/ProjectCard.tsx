"use client";

import { Github, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";



type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="card flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.repoUrl && (
            <a
              className="inline-flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> <span className="text-sm">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              className="inline-flex items-center gap-1 text-gray-700 hover:text-indigo-600 transition"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon size={18} /> <span className="text-sm">Live</span>
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-700">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-3 py-1 text-xs font-semibold border border-indigo-100 shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
