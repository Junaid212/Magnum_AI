import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import MouseGlow from "@/components/layout/MouseGlow";

export const metadata: Metadata = {
  title: "Magnum — AI Agency & Technology",
  description:
    "Empower your business with smarter AI. We are a trusted AI agency delivering cutting-edge artificial intelligence solutions.",
  keywords: ["AI agency", "artificial intelligence", "machine learning", "AI chatbot", "data science"],
  openGraph: {
    title: "Magnum — AI Agency & Technology",
    description: "Empower your business with smarter AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* GitHub Pages SPA redirect handler – decodes the path encoded by 404.html */}
        <Script id="spa-redirect" strategy="beforeInteractive">{`
          (function(l) {
            if (l.search[1] === '/') {
              var decoded = l.search.slice(1).split('&').map(function(s) {
                return s.replace(/~and~/g, '&');
              }).join('?');
              window.history.replaceState(
                null, null,
                l.pathname.slice(0, -1) + decoded + l.hash
              );
            }
          }(window.location))
        `}</Script>
      </head>
      <body className="bg-[#02040a] text-white overflow-x-clip">
        <SmoothScroll>
          <MouseGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
