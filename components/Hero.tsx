"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#journey", label: "Journey" },
  { href: "#experiences", label: "Leadership" },
  { href: "#beyond", label: "Beyond" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
] as const;

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-20 pt-8 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-radial-sky" />
      <div className="absolute inset-0 bg-radial-amber" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-sky/60 to-transparent" />

      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between py-4">
        <a href="#top" className="text-sm font-semibold text-snow">
          Dhruv Jindal
        </a>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-snow">
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[0.45rem] border border-white/10 text-snow md:hidden"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="relative z-20 mx-auto mb-6 max-w-7xl rounded-[0.5rem] border border-white/10 bg-ink/95 p-4 backdrop-blur md:hidden"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-[0.45rem] px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05] hover:text-snow"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-sky">Personal portfolio</p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-normal text-snow sm:text-7xl lg:text-8xl">
            Dhruv Jindal
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-100 sm:text-2xl">
            IIT Madras Graduate | Incoming MBA Student at XIMB
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            From a small town in Rajasthan to living across multiple cities in India, my journey has been shaped by leadership, exploration, meaningful experiences, and continuous learning.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#journey"
              className="group inline-flex min-h-12 items-center justify-center rounded-[0.5rem] bg-snow px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-sky"
            >
              Explore My Journey
              <span className="ml-2 transition group-hover:translate-x-1">{"->"}</span>
            </a>
            <span className="text-sm text-slate-400">{"IIT Madras -> XIMB"}</span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
          initial={{ opacity: 0, scale: 0.94, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-5 rounded-[0.5rem] bg-gradient-to-br from-sky/25 via-white/5 to-amber/20 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[0.5rem] border border-white/10 bg-white/[0.04] shadow-glow">
            <Image
              src="/images/profile.jpeg"
              alt="Dhruv Jindal"
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6">
              <p className="text-sm font-medium text-slate-200">Leadership. Exploration. Continuous learning.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
