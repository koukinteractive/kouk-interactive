// src/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] border-t border-white/10 text-white/70 text-sm">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center space-y-6">
        {/* Redes */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="https://facebook.com/koukinteractive" target="_blank">Facebook</Link>
          <Link href="https://x.com/koukinteractive" target="_blank">X / News</Link>
          <Link href="https://youtube.com/@koukinteractive" target="_blank">YouTube</Link>
          <Link href="https://instagram.com/koukinteractive" target="_blank">Instagram</Link>
          <Link href="https://twitch.tv/koukinteractive" target="_blank">Twitch</Link>
          <Link href="https://bsky.app/profile/koukinteractive" target="_blank">Bluesky</Link>
        </div>

        {/* Enlaces legales */}
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <Link href="/policies#license">Licencia</Link>
          <Link href="/policies#rules">Reglas & Políticas</Link>
          <Link href="/policies#privacy">Privacidad</Link>
          <Link href="/policies#cookies">Cookies</Link>
        </div>

        {/* Plataformas */}
        <div className="flex flex-wrap justify-center gap-6 grayscale opacity-80">
          <Image src="/images/platforms/appstore.svg" alt="App Store" width={80} height={30} />
          <Image src="/images/platforms/googleplay.svg" alt="Google Play" width={80} height={30} />
          <Image src="/images/platforms/web.svg" alt="Web" width={50} height={30} />
        </div>

        {/* Legal */}
        <div className="pt-6 text-xs leading-relaxed text-white/50">
          ©{new Date().getFullYear()} KOUK INTERACTIVE. Todos los derechos reservados.
          <br />
          Proyecto creativo y de software con sede en Santiago de Chile.
          <br />
          Diseño de logo e identidad visual © KOUK INTERACTIVE.
        </div>
      </div>
    </footer>
  );
}
