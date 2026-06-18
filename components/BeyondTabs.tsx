"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  adventures,
  cookingItems,
  currentlyEnjoying,
  destinationGroups,
  featuredDestinations,
  travelMapMarkers,
  travelStats
} from "@/data/portfolio";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GISMap } from "@/components/GISMap";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionHeading } from "@/components/SectionHeading";

const tabs = ["Travel", "Adventures", "Cooking", "Currently Enjoying"] as const;
type Tab = (typeof tabs)[number];

export function BeyondTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Travel");

  return (
    <AnimatedSection id="beyond">
      <SectionHeading
        eyebrow="Beyond work & academics"
        title="A life widened by movement, taste, stories, and small obsessions."
        description="The parts that make the formal chapters more human."
      />

      <div className="mt-12 flex gap-2 overflow-x-auto rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`relative min-h-11 shrink-0 rounded-[0.45rem] px-4 text-sm font-semibold transition ${
              activeTab === tab ? "text-ink" : "text-slate-300 hover:text-snow"
            }`}
          >
            {activeTab === tab ? (
              <motion.span
                layoutId="active-tab"
                className="absolute inset-0 rounded-[0.45rem] bg-snow"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      <div className="mt-10">
        {activeTab === "Travel" ? <TravelPanel /> : null}
        {activeTab === "Adventures" ? <AdventuresPanel /> : null}
        {activeTab === "Cooking" ? <CookingPanel /> : null}
        {activeTab === "Currently Enjoying" ? <EnjoyingPanel /> : null}
      </div>
    </AnimatedSection>
  );
}

function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}

function TravelPanel() {
  const [selectedDestination, setSelectedDestination] = useState(travelMapMarkers[0]);
  const currentState = destinationGroups.find((group) => group.state === selectedDestination.region);
  const nearbyPlaces = currentState?.destinations.filter((destination) => destination !== selectedDestination.name).slice(0, 5) ?? [];

  return (
    <PanelShell>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {travelStats.map((stat) => (
          <div key={stat.label} className="rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-5">
            <p className="text-4xl font-semibold text-snow">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
        <GISMap
          markers={travelMapMarkers}
          activeId={selectedDestination.id}
          onSelect={setSelectedDestination}
          density="dense"
        />

        <div className="rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky">Selected destination</p>
          <h3 className="mt-4 text-3xl font-semibold text-snow">{selectedDestination.name}</h3>
          <p className="mt-2 text-sm text-amber">{selectedDestination.region}</p>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Tap markers on the map to move through the travel footprint. Each point represents a place lived in, explored, or remembered.
          </p>
          {nearbyPlaces.length ? (
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Also in this chapter</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {nearbyPlaces.map((place) => (
                  <button
                    key={place}
                    type="button"
                    onClick={() => {
                      const marker = travelMapMarkers.find((item) => item.name === place);
                      if (marker) setSelectedDestination(marker);
                    }}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300 transition hover:border-sky hover:text-sky"
                  >
                    {place}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-slate-400">Destinations by state</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {destinationGroups.map((group) => (
              <article key={group.state} className="rounded-[0.5rem] border border-white/10 bg-white/[0.03] p-4">
                <h3 className="text-base font-semibold text-snow">{group.state}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{group.destinations.join(" / ")}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {featuredDestinations.map((destination) => (
            <article key={destination.title} className="rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-4">
              <ImageFrame image={destination.image} className="aspect-[16/10]" />
              <h3 className="mt-5 text-xl font-semibold text-snow">{destination.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{destination.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </PanelShell>
  );
}

function AdventuresPanel() {
  return (
    <PanelShell>
      <div className="grid gap-5 md:grid-cols-2">
        {adventures.map((adventure) => (
          <article key={adventure.title} className="overflow-hidden rounded-[0.5rem] border border-white/10 bg-white/[0.035]">
            <ImageFrame image={adventure.image} className="aspect-[16/9] rounded-none border-0" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-snow">{adventure.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{adventure.description}</p>
              <div className="mt-5 rounded-[0.45rem] border border-dashed border-white/15 bg-ink/50 px-4 py-3 text-sm text-slate-400">
                Video slot: {adventure.videos[0]}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PanelShell>
  );
}

function CookingPanel() {
  return (
    <PanelShell>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cookingItems.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[0.5rem] border border-white/10 bg-white/[0.035]">
            <ImageFrame image={item.image} className="aspect-[4/3] rounded-none border-0" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-snow">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </PanelShell>
  );
}

function EnjoyingPanel() {
  return (
    <PanelShell>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {currentlyEnjoying.map((item, index) => (
          <article key={item} className="min-h-44 rounded-[0.5rem] border border-white/10 bg-white/[0.035] p-5">
            <p className="text-sm text-slate-500">0{index + 1}</p>
            <h3 className="mt-8 text-xl font-semibold leading-snug text-snow">{item}</h3>
          </article>
        ))}
      </div>
    </PanelShell>
  );
}
