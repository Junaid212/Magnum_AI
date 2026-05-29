import type { Metadata } from "next";
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
      <body className="bg-[#02040a] text-white overflow-x-clip">
        <SmoothScroll>
          <MouseGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
