import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyecto • Calculadora de Descuentos",
  description:
    "Nuestro primer proyecto: una calculadora de descuentos simple, clara y confiable, diseñada para mejorar la experiencia de compra diaria.",
  openGraph: {
    title: "Proyecto • Calculadora de Descuentos",
    description:
      "Apps simples que se sienten bien. Una herramienta útil para el día a día.",
    url: "/proyectos",
    siteName: "Kouk Interactive",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto • Calculadora de Descuentos",
    description: "Apps simples que se sienten bien.",
    images: ["/og.png"],
  },
};

export default function PageProyecto() {
  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-black to-black/60">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-widest text-white/60">
            Kouk Utility
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            📱 Calculadora de Descuentos
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Una app que transforma cálculos complejos en experiencias simples y humanas.
          </p>
        </div>
      </section>

      {/* ORIGEN */}
      <section className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">🌱 Origen de la idea</h2>
          <p className="text-white/80 leading-relaxed">
            La <strong>Calculadora de Descuentos</strong> nació de una necesidad cotidiana:
            hacer que los cálculos rápidos en compras fueran simples, claros y confiables.
            Muchas veces, en tiendas físicas u online, los descuentos no son transparentes
            o resultan difíciles de calcular mentalmente. Este proyecto resuelve esa
            frustración diaria y convierte un momento complejo en una experiencia fluida.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <Image
            src="/images/projects/APPLISTA3.png"
            alt="Mockup Calculadora"
            width={900}
            height={1600}
            className="object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* HISTORIA */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold mb-6">📖 Historia del desarrollo</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-lg mb-2">Fase inicial (idea)</h3>
            <p className="text-white/70">
              Una herramienta sencilla para calcular precios con descuentos, sin complicaciones ni publicidad invasiva.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-lg mb-2">Primera versión</h3>
            <p className="text-white/70">
              Minimalista: el usuario ingresa el precio y el porcentaje para obtener el resultado inmediato.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h3 className="font-semibold text-lg mb-2">Evolución</h3>
            <ul className="list-disc ml-5 space-y-2 text-white/70">
              <li>Botones de descuentos rápidos (10%, 20%, 25%, 30%, 40%, 70%).</li>
              <li>Historial de cálculos para revisar operaciones anteriores.</li>
              <li>Opción de compartir resultados en redes sociales o apps de mensajería.</li>
              <li>Temas visuales y un estilo kawaii/minimalista que hacen agradable la experiencia.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h3 className="font-semibold text-lg mb-2">Actualidad</h3>
            <p className="text-white/70">
              La calculadora ya se encuentra lista como aplicación móvil (APK) y en proceso de publicación en Google Play Store.
            </p>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-3">✨ Filosofía del proyecto</h2>
          <p className="text-white/80 leading-relaxed">
            En <strong>Kouk Interactive</strong> creemos que la tecnología debe sentirse humana y cercana.
            La Calculadora de Descuentos no busca competir con grandes apps financieras: su propósito es
            <strong> aportar utilidad inmediata</strong> en la vida diaria, sin ruido ni distracciones.
          </p>
          <blockquote className="mt-6 border-l-4 border-white/20 pl-4 italic text-white/70 text-lg">
            &ldquo;No nacemos para competir por un podio, nacemos para aportar.&rdquo;
          </blockquote>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <Image
            src="/images/projects/WhatsApp Image 2025-09-19 at 10.15.26 AM.jpeg"
            alt="Vista Calculadora"
            width={900}
            height={1600}
            className="object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* PERFIL DEL USUARIO */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold mb-6">👤 Perfil del usuario</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Compradores frecuentes",
              desc: "Personas que realizan compras y desean claridad inmediata en descuentos.",
            },
            {
              title: "Estudiantes y jóvenes",
              desc: "Buscan una herramienta rápida y confiable para cálculos cotidianos.",
            },
            {
              title: "Amantes de la simplicidad",
              desc: "Valoran estética cuidada y experiencia sin fricciones. Una compañera práctica para el día a día.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold mb-6 text-center">📸 Vistas del proyecto</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            "WhatsApp Image 2025-09-19 at 9.03.06 AM.jpeg",
            "WhatsApp Image 2025-09-19 at 9.33.39 AM (1).jpeg",
            "WhatsApp Image 2025-09-19 at 10.15.26 AM.jpeg",
            "WhatsApp Image 2025-09-19 at 9.40.38 AM.jpeg",
            "WhatsApp Image 2025-09-21 at 12.47.38 AM.jpeg",
          ].map((file, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:scale-[1.02] transition"
            >
              <Image
                src={`/images/projects/${file}`}
                alt={`Captura ${i + 1}`}
                width={900}
                height={1600}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VISIÓN */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold mb-3">🚀 Visión a futuro</h2>
        <p className="text-white/80 leading-relaxed">
          Este proyecto abre la puerta a una línea de utilidades simples pero potentes,
          bajo el sello <strong>Kouk Utility</strong>. La meta es construir un ecosistema
          de apps que hagan la vida más fácil, con diseño cuidado y enfoque humano.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="/apk/calculadora_descuentos.apk"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/20"
          >
            Descargar APK
          </a>
          <span className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm text-white/60 cursor-not-allowed">
            Próximamente en Google Play
          </span>
        </div>
      </section>
    </main>
  );
}



