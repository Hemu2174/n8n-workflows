import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ChallengesSection from "@/components/ChallengesSection";
import ReflectionSection from "@/components/ReflectionSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ChallengesSection />
      <ReflectionSection />
      <Footer />
    </div>
  );
};

export default Index;
