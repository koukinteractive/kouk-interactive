import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // Si quieres reducir un poco, podrías quitar 1536 y 3200; dejo tu lista tal cual
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2048, 2560, 3200, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    // 👇 Nuevo: evita el warning por quality=90 y te prepara para Next 16
    qualities: [75, 90],
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
