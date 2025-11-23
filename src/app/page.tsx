import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { AboutSection } from "@/components/sections/about";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ProjectsSection } from "@/components/sections/projects";
import { TeamSection } from "@/components/sections/team";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesOverview />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
