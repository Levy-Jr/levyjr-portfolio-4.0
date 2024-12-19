import Link from "next/link";
import HeroSection from "./components/hero-section";
import TestimonialSection from "./components/testimonial-section";
import ProjectSection from "./components/project-section";
import StackSection from "./components/stack-section";

export default function Home() {

  return (
    <main className="w-container mx-auto">
      <HeroSection />
      <TestimonialSection />
      <ProjectSection />
      <StackSection />
    </main>
  );
}
