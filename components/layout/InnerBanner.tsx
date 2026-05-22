"use client";

import React from "react";

interface InnerBannerProps {
  title: string;
  breadcrumb?: string;
  bg?: string;
}

export default function InnerBanner({ title, breadcrumb = "Home //", bg }: InnerBannerProps) {
  const bannerImage = bg ?? "/assets/images/inner-banner.svg";

  return (
    <section className="w-full overflow-hidden">
      <div
        className="w-full py-28 flex items-center justify-center relative"
        style={{
          backgroundImage:
            `linear-gradient(rgba(2,4,10,0.88), rgba(2,4,10,0.88)), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 48px), url('${bannerImage}')`,
          backgroundSize: "cover, 48px 100%, cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container text-center">
          <div className="mb-6 text-sm text-slate-300 flex items-center justify-center gap-3">
            <span className="block w-2.5 h-2.5 rounded-full bg-[#00e699] shadow-[0_0_8px_rgba(0,230,153,0.9)]" />
            <span>{breadcrumb}</span>
            <span className="block w-2.5 h-2.5 rounded-full bg-[#00e699] shadow-[0_0_8px_rgba(0,230,153,0.9)]" />
          </div>

          <h1 className="font-syne font-extrabold text-white text-[5.5rem] md:text-[8rem] leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
