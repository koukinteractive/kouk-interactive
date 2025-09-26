import "./globals.css";
import type { Metadata, Viewport } from "next";
import SiteHeader from "../components/SiteHeader";

import { Sora, Inter } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koukinteractive.com"),
  title: {
    default: "Kouk Interactive — Apps simples que se sienten bien",
    template: "%s • Kouk Interactive",
  },
  description:
    "Kouk Interactive crea utilidades, minijuegos y apps de bienestar. Menos burocracia, más creación con propósito. Publicamos en GitHub y Vercel.",
  openGraph: {
    title: "Kouk Interactive",
    description:
      "Kouk Interactive crea utilidades, minijuegos y apps de bienestar.",
    url: "/",
    siteName: "Kouk Interactive",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kouk Interactive",
    description:
      "Kouk Interactive crea utilidades, minijuegos y apps de bienestar.",
    images: ["/og.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`h-full ${inter.variable} ${sora.variable} font-sans`}
    >
      <body className="h-full min-h-svh bg-[#0b1220] text-white">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
