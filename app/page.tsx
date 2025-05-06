import React from "react";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import FloatingMenu from "./components/FloatingMenu";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className=" w-full min-h-screen bg-[#121418] text-white">
      {" "}
      {/* Add padding-top to account for the fixed header */}
      <FloatingMenu />
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}
