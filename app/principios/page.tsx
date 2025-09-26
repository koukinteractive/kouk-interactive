// src/app/principios/page.tsx
import type { Metadata } from "next";
import { Check, Heart, Rocket, Hammer, Compass, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestros Principios • Kouk Interactive",
  description:
    "Nuestros principios: apps simples que se sienten bien. Modernidad, practicidad y creación con propósito. Menos burocracia, más hacer.",
  openGraph: {
    title: "Nuestros Principios • Kouk Interactive",
    description:
      "Apps simples que se sienten bien. Modernidad, practicidad y creación con propósito.",
    url: "/principios",
    siteName: "Kouk Interactive",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestros Principios • Kouk Interactive",
    description:
      "Apps simples que se sienten bien. Modernidad, practicidad y creación con propósito.",
    images: ["/og.png"],
  },
};

const PRINCIPIOS = [
  {
    icon: <Lightbulb className="h-6 w-6" aria-hidden />,
    title: "Simplicidad que se siente bien",
    desc:
      "Diseñamos utilidades, mini-juegos y apps de bienestar que se entienden al primer toque. Menos ruido, más claridad.",
  },
  {
    icon: <Compass className="h-6 w-6" aria-hidden />,
    title: "Propósito antes que ego",
    desc:
      "No somos grandilocuentes. Construimos con sentido de aporte: resolver dilemas reales y dejar algo mejor para las próximas generaciones.",
  },
  {
    icon: <Hammer className="h-6 w-6" aria-hidden />,
    title: "Menos burocracia, más hacer",
    desc:
      "Preferimos prototipos funcionando a presentaciones eternas. Llevamos ideas a hechos concretos.",
  },
  {
    icon: <Rocket className="h-6 w-6" aria-hidden />,
    title: "Perfección como guía, no como freno",
    desc:
      "Nos inspira la excelencia, pero entendemos que fallar es parte del crecimiento: como un músculo que llega al fallo para hacerse más fuerte.",
  },
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Cultura que fomenta crear",
    desc:
      "Apoyamos la iniciativa de nuestro equipo. Compartimos conocimiento, celebramos los intentos y aprendemos juntos.",
  },
  {
    icon: <Heart className="h-6 w-6" aria-hidden />,
    title: "Cuidado por la experiencia",
    desc:
      "Cada detalle importa: desde el onboarding hasta el último micro-feedback. Queremos que usar Kouk se sienta bien.",
  },
];

export default function PagePrincipios() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-black to-black/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-widest text-white/60">
            Kouk Interactive
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Nuestros principios
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Apps simples que se sienten bien. Modernidad, practicidad y creación con
            propósito. Sin burocracia innecesaria.
          </p>

          {/* Slogan corto + largo */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-4">
              <span className="text-xs uppercase tracking-widest text-white/60">
                Slogan corto
              </span>
              <p className="mt-2 text-xl">Apps simples que se sienten bien.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <span className="text-xs uppercase tracking-widest text-white/60">
                Versión extendida
              </span>
              <p className="mt-2">
                Somos una casa creativa de software enfocada en utilidades, mini-juegos
                y bienestar. Llevamos ideas a hechos concretos que aportan a la sociedad
                y a las futuras generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPIOS.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 p-2">{p.icon}</div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Cómo trabajamos</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Prototipos en días, no en meses.",
              "Validamos con usuarios antes de escalar.",
              "Documentación viva, mínima y útil.",
              "Accesibilidad y performance como estándar.",
              "Feedback continuo del equipo y la comunidad.",
              "Entrega continua con CI/CD (Vercel + GitHub).",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-white/80">
                <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
            >
              Conversemos un proyecto
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD simple */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Nuestros Principios • Kouk Interactive",
            description:
              "Principios de diseño y cultura de trabajo de Kouk Interactive.",
            url: "https://koukinteractive.com/principios",
            publisher: { "@type": "Organization", name: "Kouk Interactive" },
          }),
        }}
      />
    </main>
  );
}
