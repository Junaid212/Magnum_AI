"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InnerBanner from "@/components/layout/InnerBanner";

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <InnerBanner title="Contact" breadcrumb="Home // Contact" />
      <main className="relative section-pad">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
