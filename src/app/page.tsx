import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectGrid />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
