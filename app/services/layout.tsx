"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerBanner from "@/components/layout/InnerBanner";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <InnerBanner title="Services" breadcrumb="Home // Services" />
      <main className="relative section-pad">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
