"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { journeyMapMarkers, journeyStops } from "@/data/portfolio";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GISMap } from "@/components/GISMap";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionHeading } from "@/components/SectionHeading";

const journeyPathIds = journeyStops.map(
  (stop) => journeyMapMarkers.find((marker) => marker.name === stop.city)?.id ?? stop.city
);

export function JourneyTimeline() {
  const [activeCity, setActiveCity] = useState(journeyMapMarkers[0].id);
  const selectedMarker = journeyMapMarkers.find((marker) => marker.id === activeCity) ?? journeyMapMarkers[0];
  const selectedStop = useMemo(
    () => journeyStops.find((stop) => stop.city === selectedMarker.name) ?? journeyStops[0],
    [selectedMarker.name]
  );

  return (
    <AnimatedSection id="journey">
      <SectionHeading
        eyebrow="My journey"
        title="Seven cities, one evolving point of view."
        description="A path across India, shaped by roots, ambition, transformation, independence, perspective, and the next chapter."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="sticky top-24 h-fit">
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-400">Interactive route</p>
          <GISMap
            markers={journeyMapMarkers}
            pathMarkerIds={journeyPathIds}
            activeId={selectedMarker.id}
            onSelect={(marker) => setActiveCity(marker.id)}
            showPath
          />
          <div className="mt-4 rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Route order</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {journeyStops.map((stop, index) => (
                <span key={stop.city}>
                  <span className="font-semibold text-sky">{index + 1}.</span> {stop.city}
                  {index < journeyStops.length - 1 ? <span className="text-slate-500"> {"->"} </span> : null}
                </span>
              ))}
            </p>
          </div>
          <div className="mt-4 rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">{selectedStop.label}</p>
            <h3 className="mt-3 text-2xl font-semibold text-snow">{selectedStop.city}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{selectedStop.description}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-sky via-white/20 to-amber md:left-6" />
          <div className="space-y-8">
            {journeyStops.map((stop, index) => (
              <motion.article
                key={stop.city}
                role="button"
                tabIndex={0}
                aria-label={`View ${stop.city} on the journey map`}
                className="relative cursor-pointer pl-12 md:pl-16"
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => {
                  const marker = journeyMapMarkers.find((item) => item.name === stop.city);
                  if (marker) setActiveCity(marker.id);
                }}
                onClick={() => {
                  const marker = journeyMapMarkers.find((item) => item.name === stop.city);
                  if (marker) setActiveCity(marker.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    const marker = journeyMapMarkers.find((item) => item.name === stop.city);
                    if (marker) setActiveCity(marker.id);
                  }
                }}
              >
                <div className="absolute left-[0.55rem] top-2 h-4 w-4 rounded-full border border-sky bg-ink shadow-glow md:left-[1.05rem]" />
                <div className="grid gap-5 rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur sm:p-5 md:grid-cols-[1fr_1.1fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">{stop.label}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-snow">{stop.city}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{stop.description}</p>
                  </div>
                  <ImageFrame image={stop.image} className="aspect-[4/3]" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
