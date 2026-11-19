import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { TechStackSection } from "@/components/sections/TechStackSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectGrid />
      <TechStackSection />
      <ContactSection />
    </>
  );
}
