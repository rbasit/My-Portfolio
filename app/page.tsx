"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects, skills, certifications, experience, education } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
        >
          Hi, I&apos;m Rida Basit 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-lg md:text-xl text-gray-600"
        >
          CS student at UTD • Software Developer • Building clean, modern apps.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-6 py-3 font-semibold shadow-md hover:opacity-90 transition"
          >
            View Projects <ArrowRight size={18} />
          </Link>
          <a
            href="/RidaBasit.pdf"
            className="inline-flex items-center gap-2 rounded-2xl bg-white text-indigo-600 px-6 py-3 font-semibold shadow-md border border-indigo-200 hover:bg-indigo-50"
          >
            Resume <Download size={18} />
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <Section id="projects" title="Featured Projects" subtitle="A few highlights of my work.">
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-indigo-600 font-semibold hover:underline">
            See all projects →
          </Link>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Tools and technologies I use.">
        <div className="card grid sm:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-bold text-indigo-700">{group}</h3>
              <p className="text-gray-700">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
