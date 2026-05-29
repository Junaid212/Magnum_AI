/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages — generates static HTML in /out
  output: "export",

  // /about → /about/index.html so GitHub Pages can serve it
  trailingSlash: true,

  images: {
    // next/image optimization requires a server; GitHub Pages is static-only
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
};

export default nextConfig;

