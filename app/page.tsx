import { BeyondTabs } from "@/components/BeyondTabs";
import { Contact } from "@/components/Contact";
import { ExperienceCards } from "@/components/ExperienceCards";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { NextChapter } from "@/components/NextChapter";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <JourneyTimeline />
      <ExperienceCards />
      <BeyondTabs />
      <FeaturedProjects />
      <NextChapter />
      <Contact />
      <Footer />
    </main>
  );
}
