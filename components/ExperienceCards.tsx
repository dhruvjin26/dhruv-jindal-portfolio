"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceCards() {
  return (
    <AnimatedSection id="experiences">
      <SectionHeading
        eyebrow="Experiences & leadership"
        title="Rooms where responsibility became practice."
        description="Not a resume wall, but a set of chapters shaped by initiative, public presence, coordination, and thoughtful execution."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.title}
            className="group relative min-h-64 overflow-hidden rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.055]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <div
              className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                experience.accent === "sky" ? "via-sky" : "via-amber"
              } to-transparent`}
            />
            <p className={experience.accent === "sky" ? "text-sm font-medium text-sky" : "text-sm font-medium text-amber"}>
              {experience.eyebrow}
            </p>
            <h3 className="mt-5 text-2xl font-semibold text-snow">{experience.title}</h3>
            <p className="mt-5 text-sm leading-7 text-slate-300">{experience.description}</p>
            <div className="absolute bottom-5 right-5 h-9 w-9 rounded-full border border-white/10 bg-white/[0.04] transition group-hover:border-sky/50" />
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
