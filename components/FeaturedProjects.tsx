import { projects } from "@/data/portfolio";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionHeading } from "@/components/SectionHeading";

export function FeaturedProjects() {
  return (
    <AnimatedSection id="projects">
      <SectionHeading
        eyebrow="Featured projects"
        title="Two ideas at the intersection of technology and curiosity."
        description="Selected projects shown with room to breathe, built for a personal site instead of a dense portfolio grid."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-[0.5rem] border border-white/10 bg-white/[0.035]">
            <ImageFrame image={project.screenshot} className="aspect-[16/10] rounded-none border-0" />
            <div className="p-6 sm:p-7">
              <h3 className="text-3xl font-semibold text-snow">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center rounded-[0.5rem] border border-white/15 px-4 text-sm font-semibold text-snow transition hover:border-sky hover:text-sky"
                >
                  View on GitHub
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
