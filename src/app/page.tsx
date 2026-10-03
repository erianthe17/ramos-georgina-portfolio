import { ContactSection } from "@/components/sections/ContactSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectGrid } from "@/components/sections/ProjectGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectGrid />
      <AboutSection />
      <ContactSection />
    </>
  );
}
