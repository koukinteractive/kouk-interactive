import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas • Kouk Interactive",
  description:
    "Políticas generales y por app de Kouk Interactive: privacidad, seguridad de datos, términos y accesibilidad.",
  robots: { index: true, follow: true },
};

const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28">
    <h2 className="text-xl md:text-2xl font-semibold mb-3">{title}</h2>
    <div className="prose prose-invert max-w-none">{children}</div>
    <div className="h-px my-8 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </section>
);

export default function PoliciesPage() {
  const updated = "2025-09-29";

  return (
    <main className="min-h-[100svh] w-full bg-[#0b1220] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Políticas de Kouk Interactive</h1>
          <p className="text-white/70 mt-2">
            Base legal y prácticas por división. Última actualización: {updated}.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-8 md:grid-cols-[260px_1fr]">
        {/* Índice */}
        <aside className="md:sticky md:top-20 h-max">
          <nav className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
            <p className="mb-2 font-medium text-white/90">Índice</p>
            <ul className="space-y-2 text-white/80">
              <li className="mt-2 font-semibold text-white/90">Políticas Generales</li>
              <li><a href="#privacy" className="hover:text-white">1. Privacidad</a></li>
              <li><a href="#terms" className="hover:text-white">2. Términos y Condiciones</a></li>
              <li><a href="#security" className="hover:text-white">3. Datos y Seguridad</a></li>
              <li><a href="#a11y" className="hover:text-white">4. Accesibilidad</a></li>

              <li className="mt-4 font-semibold text-white/90">Políticas por App</li>
              <li><a href="#apps-utility" className="hover:text-white">Utility (Calculadora de Descuentos, etc.)</a></li>
              <li><a href="#apps-play" className="hover:text-white">Play (mini-juegos y experiencias)</a></li>
              <li><a href="#apps-care" className="hover:text-white">Care (bienestar y seguridad)</a></li>
            </ul>
          </nav>
        </aside>

        {/* Contenido */}
        <div>
          {/* Generales */}
          <Sec id="privacy" title="1) Política de Privacidad">
            <p>
              En Kouk Interactive valoramos tu privacidad. No recopilamos datos personales a menos
              que sea estrictamente necesario para el funcionamiento de la app.
            </p>
            <p>
              Algunas apps pueden mostrar publicidad mediante Google AdMob u otros proveedores.
              Estos terceros pueden recopilar <em>datos técnicos</em> (por ejemplo: identificador de
              publicidad del dispositivo, ubicación aproximada e información de uso) para seguridad,
              prevención de fraude, medición y/o personalización de anuncios, según normativa y
              consentimiento cuando corresponda. Nunca vendemos ni compartimos datos personales fuera
              de los proveedores tecnológicos necesarios para operar nuestras apps.
            </p>
            <p>
              Puedes controlar la personalización de anuncios en los ajustes de tu dispositivo.
              Contacto: <a href="mailto:contacto@koukinteractive.com">contacto@koukinteractive.com</a>.
            </p>
          </Sec>

          <Sec id="terms" title="2) Términos y Condiciones">
            <p>
              Las apps y servicios de Kouk Interactive se ofrecen tal cual (“as is”), sin garantía de
              resultados específicos. Son para uso personal y no sustituyen asesoría profesional.
            </p>
            <ul>
              <li>El contenido, la marca y el software pertenecen a Kouk Interactive.</li>
              <li>Podemos actualizar funciones, servicios o estos términos en cualquier momento.</li>
              <li>No nos hacemos responsables por pérdidas derivadas del mal uso de nuestras apps.</li>
            </ul>
          </Sec>

          <Sec id="security" title="3) Política de Datos y Seguridad">
            <ul>
              <li>Usamos cifrado <strong>HTTPS</strong> para comunicaciones entre apps y servicios externos.</li>
              <li>Aplicamos <strong>minimización</strong>: solo recopilamos lo estrictamente necesario.</li>
              <li>
                Los datos publicitarios son tratados por proveedores como Google, bajo sus propias
                políticas de seguridad y retención.
              </li>
              <li>
                Si detectamos incidentes de seguridad, tomaremos medidas para mitigarlos y, de ser
                necesario, notificaremos a los usuarios.
              </li>
            </ul>
            <p className="text-white/70 text-sm mt-2">
              Contacto de seguridad: <a href="mailto:security@koukinteractive.com">security@koukinteractive.com</a>.
            </p>
          </Sec>

          <Sec id="a11y" title="4) Guía de Diseño y Accesibilidad">
            <p>Buscamos apps inclusivas y fáciles de usar. Buenas prácticas generales:</p>
            <ul>
              <li>Contraste adecuado para textos e íconos (nivel AA cuando aplique).</li>
              <li>Botones táctiles de al menos <strong>44×44 px</strong>.</li>
              <li>Navegación clara y mensajes comprensibles.</li>
              <li>Soporte a tamaños de letra del sistema (Font Scale / Dynamic Type).</li>
            </ul>
            <p className="text-white/70 text-sm mt-2">
              Detecciones o sugerencias: <a href="mailto:contacto@koukinteractive.com">contacto@koukinteractive.com</a>.
            </p>
          </Sec>

          {/* Por app / división */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Políticas por App</h2>
          <p className="text-white/70 mb-6">
            Estas secciones describen particularidades por línea de producto. Si una app específica
            tiene condiciones adicionales, se informará dentro de la propia app o en su ficha.
          </p>

          <Sec id="apps-utility" title="Utility (Calculadora de Descuentos y utilidades afines)">
            <p>
              Las utilidades de esta división no requieren registro ni crean cuentas. Pueden integrar
              publicidad con Google AdMob u otros proveedores. En tal caso, los proveedores podrían
              procesar identificadores publicitarios del dispositivo, IP, información técnica y
              ubicación aproximada para seguridad, informes y/o personalización (según consentimiento).
            </p>
            <ul>
              <li>No almacenamos datos personales en servidores de Kouk para estas utilidades.</li>
              <li>Puedes desactivar o restablecer el ID de publicidad en los ajustes del dispositivo.</li>
              <li>Anuncios no personalizados si no aceptas personalización (cuando aplique).</li>
              <li>Permisos: solo los estrictamente necesarios para la función (p. ej., acceso a red).</li>
            </ul>
          </Sec>

          <Sec id="apps-play" title="Play (mini-juegos y experiencias)">
            <p>
              Productos orientados a entretenimiento y aprendizaje ligero. Pueden incluir publicidad o
              enlaces de terceros. No se solicita registro ni se recopilan datos personales por parte
              de Kouk. Si se integra AdMob u otro proveedor, se aplican los mismos criterios descritos
              en “Privacidad” y “Utility”.
            </p>
            <p className="text-white/80">
              <strong>Audiencias menores:</strong> salvo indicación explícita, estas apps no están
              dirigidas a niños, y evitamos publicidad basada en intereses para audiencias infantiles.
            </p>
          </Sec>

          <Sec id="apps-care" title="Care (bienestar y seguridad)">
            <p>
              Apps orientadas a orientación y hábitos saludables. No sustituyen <strong>asesoría médica</strong>.
              No recopilamos datos de salud en servidores de Kouk. Si una app requiere permisos locales
              (p. ej., notificaciones), se solicitarán en contexto y solo para su función.
            </p>
            <ul>
              <li>No diagnósticos; contenido informativo y de apoyo.</li>
              <li>Sin cuentas de usuario ni almacenamiento de datos sensibles en Kouk.</li>
              <li>Si hubiese publicidad, se aplican los lineamientos generales de privacidad y seguridad.</li>
            </ul>
          </Sec>

          {/* Enlace de retorno */}
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
