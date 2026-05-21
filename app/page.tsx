"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Sections
import HeroSection     from "@/components/sections/HeroSection";
import LogoMarquee     from "@/components/sections/LogoMarquee";
import WhoWeAre        from "@/components/sections/WhoWeAre";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import WhyChooseUs     from "@/components/sections/WhyChooseUs";
import AIDashboard     from "@/components/sections/AIDashboard";
import BentoGrid       from "@/components/sections/BentoGrid";
import ProjectsStack   from "@/components/sections/ProjectsStack";
import Industries      from "@/components/sections/Industries";
import Testimonials    from "@/components/sections/Testimonials";
import AchievementsForm from "@/components/sections/AchievementsForm";
import LatestNews      from "@/components/sections/LatestNews";
import Pricing         from "@/components/sections/Pricing";
import FAQ             from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="relative bg-[#02040a] overflow-hidden">
      <Navbar />
      <HeroSection />
      {/* <LogoMarquee /> */}
      <WhoWeAre />
      <ServicesAccordion />
      <WhyChooseUs />
      {/* <AIDashboard /> */}
      {/* <BentoGrid /> */}
      <ProjectsStack />
      <Industries />
      {/* <Testimonials /> */}
      <AchievementsForm />
      <LatestNews />
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      <Footer />
    </main>
  );
}
