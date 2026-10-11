import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";
import { TimelineSection } from "../components/sections/TimelineSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <SkillsSection />
      <TimelineSection />
      <ContactSection />
    </>
  );
}