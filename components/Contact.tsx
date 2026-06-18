import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  { label: "GitHub", href: "https://github.com/", external: true },
  { label: "Email", href: "mailto:dhruv@example.com", external: false },
  { label: "Resume", href: "mailto:dhruv@example.com?subject=Resume%20Request", external: false }
];

export function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeading
          eyebrow="Contact"
          title="Open to thoughtful conversations and the next good challenge."
          description="Connect for leadership, business, technology, travel stories, or a sharply opinionated food recommendation."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex min-h-24 items-center justify-between rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-5 text-snow transition hover:-translate-y-0.5 hover:border-sky/60 hover:bg-white/[0.055]"
            >
              <span className="text-lg font-semibold">{link.label}</span>
              <span className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky">{"->"}</span>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
