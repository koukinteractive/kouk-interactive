"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Key = "privacy" | "terms" | "security" | "a11y";

const MODALS: Record<Key, { title: string; body: React.ReactNode }> = {
  privacy: {
    title: "Política de Privacidad",
    body: (
      <>
        <p>
          En Kouk Interactive valoramos tu privacidad. No recopilamos datos personales a menos que
          sea estrictamente necesario para el funcionamiento de la app.
        </p>
        <p className="mt-2">
          Algunas apps pueden mostrar publicidad mediante Google AdMob u otros proveedores. Estos
          terceros pueden recopilar <em>datos técnicos</em> (por ejemplo: identificador de
          publicidad del dispositivo, ubicación aproximada e información de uso) para seguridad,
          prevención de fraude, medición y personalización de anuncios según normativa aplicable.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Nunca vendemos ni compartimos datos personales fuera de los proveedores tecnológicos necesarios.</li>
          <li>Puedes controlar la personalización de anuncios desde los ajustes de tu dispositivo.</li>
        </ul>
        <p className="mt-3">
          📧 Contacto: <a href="mailto:contacto@koukinteractive.com">contacto@koukinteractive.com</a>
        </p>
      </>
    ),
  },
  terms: {
    title: "Términos y Condiciones",
    body: (
      <>
        <p>
          Las apps y servicios de Kouk Interactive se ofrecen tal cual (“as is”), sin garantía de
          resultados específicos. Son para uso personal y <strong>no sustituyen asesoría profesional</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>El contenido, la marca y el software pertenecen a Kouk Interactive.</li>
          <li>Podemos actualizar funciones, servicios o estos términos en cualquier momento.</li>
          <li>No somos responsables por pérdidas derivadas del mal uso de nuestras apps.</li>
        </ul>
      </>
    ),
  },
  security: {
    title: "Política de Datos y Seguridad",
    body: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>Usamos cifrado <strong>HTTPS</strong> para comunicaciones entre apps y servicios externos.</li>
          <li>Aplicamos <strong>minimización</strong>: solo recopilamos lo estrictamente necesario.</li>
          <li>
            Los datos publicitarios son tratados por proveedores como Google, bajo sus propias políticas de seguridad.
          </li>
          <li>
            Si detectamos incidentes de seguridad, tomaremos medidas para mitigarlos y, de ser necesario, notificaremos a los usuarios.
          </li>
        </ul>
      </>
    ),
  },
  a11y: {
    title: "Guía de Diseño y Accesibilidad",
    body: (
      <>
        <p>Todas nuestras apps buscan cumplir con buenas prácticas de accesibilidad:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Contraste adecuado para textos e íconos.</li>
          <li>Botones táctiles de al menos <strong>44×44 px</strong>.</li>
          <li>Navegación clara y mensajes comprensibles.</li>
          <li>Soporte a <strong>tamaños de letra del sistema</strong>.</li>
        </ul>
        <p className="mt-3 text-sm opacity-80">
          Si detectas una barrera, escríbenos a{" "}
          <a href="mailto:contacto@koukinteractive.com">contacto@koukinteractive.com</a>.
        </p>
      </>
    ),
  },
};

export default function PoliciesModals() {
  const [openKey, setOpenKey] = useState<Key | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const open = useCallback((key: Key) => {
    setOpenKey(key);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setOpenKey(null);
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname + location.search);
  }, []);

  // 1) Deep-link al cargar + responder a cambios de hash
  useEffect(() => {
    const handleHash = () => {
      const raw = (location.hash || "").replace("#", "");
      const key = raw as Key;
      if (["privacy", "terms", "a11y", "security"].includes(key)) {
        open(key);
      }
    };
    handleHash(); // al montar
    window.addEventListener("hashchange", handleHash);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // 2) Interceptar clics en cualquier <a> con hash (# o /#)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const anchor = el?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      // Extrae el hash de forma robusta (soporta href="#x" y href="/#x")
      let hash = "";
      try {
        // Si es relativo, crea una URL absoluta temporal
        const url = new URL(anchor.getAttribute("href")!, location.href);
        hash = (url.hash || "").replace("#", "");
      } catch {
        // Fallback para valores raros
        hash = (anchor.getAttribute("href") || "").split("#")[1] || "";
      }

      if (["privacy", "terms", "a11y", "security"].includes(hash as Key)) {
        e.preventDefault();
        history.replaceState(null, "", `#${hash}`);
        open(hash as Key);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open]);

  useEffect(() => {
    if (openKey && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [openKey]);

  const sheet = openKey ? MODALS[openKey] : null;

  return (
    <>
      {/* Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {openKey && sheet && (
              <motion.div
                className="fixed inset-0 z-[80]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  onClick={close}
                />
                {/* Sheet */}
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`title-${openKey}`}
                  className="relative mx-auto mt-24 w-[92vw] max-w-2xl rounded-2xl border border-white/10 bg-[#0b1220] p-4 shadow-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                >
                  <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                    <h2 id={`title-${openKey}`} className="text-lg font-semibold">
                      {sheet.title}
                    </h2>
                    <button
                      ref={closeBtnRef}
                      aria-label="Cerrar"
                      className="rounded-md border border-white/15 p-1.5 hover:bg-white/10"
                      onClick={close}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </header>
                  <div className="prose prose-invert max-w-none py-4 text-white/85 prose-p:leading-relaxed prose-li:marker:text-white/60">
                    {sheet.body}
                  </div>
                  <footer className="flex justify-end border-t border-white/10 pt-3">
                    <button
                      className="rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
                      onClick={close}
                    >
                      Cerrar
                    </button>
                  </footer>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* Contenido crawlable/SEO (oculto visualmente) */}
      <div className="sr-only" aria-hidden>
        <section id="privacy">
          <h2>Política de Privacidad</h2>
          <p>
            En Kouk Interactive valoramos tu privacidad. No recopilamos datos personales a menos que
            sea estrictamente necesario para el funcionamiento de la app.
          </p>
          <p>Contacto: contacto@koukinteractive.com</p>
        </section>

        <section id="terms">
          <h2>Términos y Condiciones</h2>
          <p>
            Las apps y servicios de Kouk Interactive se ofrecen tal cual ("as is"), sin garantía de
            resultados específicos. Son para uso personal y no sustituyen asesoría profesional.
          </p>
          <p>Contacto: contacto@koukinteractive.com</p>
        </section>

        <section id="a11y">
          <h2>Guía de Diseño y Accesibilidad</h2>
          <p>
            Todas nuestras apps buscan cumplir con buenas prácticas de accesibilidad:
            contraste adecuado, botones táctiles de al menos 44×44 px, navegación clara.
            Reportes a contacto@koukinteractive.com.
          </p>
        </section>

        <section id="security">
          <h2>Política de Datos y Seguridad</h2>
          <p>
            Usamos cifrado HTTPS, aplicamos minimización de datos, y manejamos incidentes
            de seguridad con notificación cuando sea necesario.
          </p>
        </section>
      </div>
    </>
  );
}


