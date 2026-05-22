"use client";

import AboutCards from "@/components/sections/AboutCards";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <section className="relative bg-[#02040a] overflow-hidden">
      <div className="container">
        <ScrollReveal>
          <AboutCards />
        </ScrollReveal>
      </div>
    </section>
  );
}
