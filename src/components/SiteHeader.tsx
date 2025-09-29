"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" aria-label="Inicio Kouk Interactive" className="inline-flex items-center gap-3">
          <Image src="/images/logos/kouk_isotype.png" alt="Kouk isotipo" width={28} height={28} className="h-7 w-7" />
          <Image src="/images/logos/kouk_lockup.svg" alt="Kouk Interactive" width={120} height={24} className="h-6 w-auto" />
        </Link>

        {/* Navegación (nota: hash hacia la HOME) */}
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <Link className="hover:text-white" href="/#divisions">Divisiones</Link>
          <Link className="hover:text-white" href="/projects">Proyectos</Link>
          <Link className="hover:text-white" href="/principios">Principios</Link>
          <Link className="hover:text-white" href="/policies">Políticas</Link>
        </nav>

        {/* Botones */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="secondary" className="hidden md:inline-flex bg-white/10 hover:bg-white/15 text-white border border-white/10">
            <a href="https://github.com/koukinteractive" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild size="sm" className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:opacity-90">
            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
              <Sparkles className="mr-2 h-4 w-4" /> Publicado en Vercel
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
