"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Building2, Gamepad2, HeartPulse,
  ExternalLink, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Division = {
  key: string;
  tag: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  art: string;
  logo: string;
  highlights: string[];
};

const divisions: Division[] = [
  {
    key: "utility",
    tag: "kouk_utility",
    name: "KOUK Utility",
    desc: "Utilidades cotidianas, cálculos rápidos y apps que resuelven tareas simples con elegancia.",
    icon: Building2,
    href: "/divisions/utility",
    art: "/images/divisions/div_utility_square.webp",
    logo: "/images/logos/logo_koukutility.png",
    highlights: ["Calculadora de Descuentos", "Horas Laborales", "Conversores y herramientas rápidas"],
  },
  {
    key: "play",
    tag: "kouk_gameplay",
    name: "KOUK Play",
    desc: "Mini-juegos y experiencias interactivas para aprender, explorar y entretener.",
    icon: Gamepad2,
    href: "/divisions/play",
    art: "/images/divisions/div_play_square.webp",
    logo: "/images/logos/logo_koukplay.png",
    highlights: ["Juegos educativos", "Retos diarios", "Eventos y temporadas"],
  },
  {
    key: "care",
    tag: "kouk_safe_and_health",
    name: "KOUK Care",
    desc: "Seguridad, bienestar y salud. Apps que orientan, cuidan y acompañan a las personas.",
    icon: HeartPulse,
    href: "/divisions/care",
    art: "/images/divisions/div_care_square.webp",
    logo: "/images/logos/logo_koukcare.png",
    highlights: ["Guías de primeros pasos", "Rutinas de bienestar", "Alertas y acompañamiento"],
  },
];

const policies = [
  { label: "Política de Privacidad", href: "/policies/privacy" },
  { label: "Términos y Condiciones", href: "/policies/terms" },
  { label: "Guía de Diseño y Accesibilidad", href: "/policies/design" },
  { label: "Política de Datos y Seguridad", href: "/policies/security" },
];

export default function KoukLanding() {
  return (
    <main className="min-h-[100svh] w-full bg-[#0b1220] text-white selection:bg-cyan-400/30 selection:text-white">
      {/* Hero */}
      <section className="relative">
        {/* Fondo hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-3200.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hidden md:block w-full h-full object-cover object-center opacity-95 select-none"
            draggable={false}
          />
          <Image
            src="/images/hero/hero_mobile.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="md:hidden w-full h-full object-cover object-center opacity-95 select-none"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-sky-400/5 to-fuchsia-400/5" />
        </div>

        {/* Contenido hero */}
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="mx-auto grid min-h-[66svh] place-items-center py-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-center"
            >
              <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
                Apps con sentido.
                <span className="block text-white/80">No nacen para ser las mejores,</span>
                <span className="block text-white/80">nacen para aportar.</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-white/80">
                Somos una casa creativa de software enfocada en utilidades, mini-juegos y bienestar. Compartimos los dilemas del mundo y buscamos resolverlos con tecnología que se siente humana.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:opacity-90">
                  <a href="#divisions">
                    Conocer divisiones <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="bg-white/10 hover:bg-white/15 text-white border border-white/10">
                  <Link href="/principios">Nuestros principios</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fades */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-30
          bg-[radial-gradient(1200px_60%_at_-10%_50%,rgba(0,0,0,.35),transparent_60%),
              radial-gradient(1200px_60%_at_110%_50%,rgba(0,0,0,.35),transparent_60%)]"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0b1220] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#0b1220]/40 to-[#0b1220]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Divisiones */}
      <section id="divisions" className="relative overflow-hidden">
        {/* Fondo ambiental */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full
                          bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.12),_transparent_60%)]
                          blur-2xl" />
          <div className="absolute -bottom-40 -right-40 h-[60vmax] w-[60vmax] rounded-full
                          bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.10),_transparent_60%)]
                          blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{ backgroundImage: "url(/images/tex/grain_tile.png)" }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Divisiones</h2>
            <Link href="/divisions" className="text-sm text-white/70 hover:text-white inline-flex items-center">
              Ver todas <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {divisions.map((d) => (
              <motion.div
                key={d.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <Link href={d.href} className="block h-full">
                  <Card className="group relative h-full min-h-[320px] md:min-h-[360px] flex flex-col overflow-hidden border-white/10 bg-white/5 backdrop-blur">
                    <div className="absolute inset-0 -z-10">
                      <Image
                        src={d.art}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        quality={88}
                        className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105 select-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
                    </div>

                    <CardHeader className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-white/10 p-2">
                          <d.icon className="h-5 w-5" />
                        </div>
                        <Image
                          src={d.logo}
                          alt={`Logo ${d.name}`}
                          width={120}
                          height={28}
                          sizes="120px"
                          quality={95}
                          className="h-6 w-auto"
                        />
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 flex-1 flex flex-col">
                      <p className="text-white/80">{d.desc}</p>
                      <ul className="mt-4 space-y-1 text-sm text-white/70">
                        {d.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/50" /> {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-5 inline-flex items-center text-sm text-white/90 group-hover:text-white">
                        Explorar <ExternalLink className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Políticas */}
      <section id="policies" className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/policies/policies_bg.webp"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className="object-cover opacity-60 select-none"
            draggable={false}
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Políticas y estándares</h2>
            <Link href="/policies" className="text-sm text-white/80 hover:text-white inline-flex items-center">
              Ver todas <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {policies.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white/80 hover:bg-black/40"
              >
                <div className="flex items-center justify-between">
                  <span>{p.label}</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
