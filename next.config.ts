import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    // Usa formatos modernos por defecto
    formats: ["image/avif", "image/webp"],

    // Anchos que Next generará automáticamente (incluye 2x/3x para desktop grande)
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920, 2048, 2560, 3200, 3840],

    // Tamaños para imágenes "pequeñas" (iconos, thumbnails)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache de las imágenes optimizadas (en segundos)
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 días
  },

  // Opcional: mejora import de librerías (reduce bundle)
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
