import NavbarWrapper from "@/components/NavbarWrapper";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import PreloaderWrapper from "@/components/PreloaderWrapper";

export default function Home() {
  return (
    <PreloaderWrapper>
      <div className="min-h-screen bg-[#09090b] font-sans">
        <NavbarWrapper />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </PreloaderWrapper>
  );
}
