"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type TriptychItem = {
  key: string;
  title: string;
  tag?: string;
  href: string;
  image: string;
  bullets?: string[];
  eyebrow?: string;
};

export default function SplitTriptych(
  { items, showTags = false }: { items: TriptychItem[]; showTags?: boolean }
) {
  const [active, setActive] = React.useState<string | null>(null);

  // Detección táctil (SSR-friendly)
  const [isTouch, setIsTouch] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 shadow-2xl">
      <div
        className="md:flex"
        onMouseLeave={() => setActive(null)}
        role="list"
        aria-label="Secciones destacadas"
      >
        {items.map((item) => {
          const expanded = active === item.key;

          return (
            <motion.article
              key={item.key}
              role="listitem"
              tabIndex={0}
              onMouseEnter={() => setActive(item.key)}
              onFocus={() => setActive(item.key)}
              onClick={() => setActive(isTouch ? (expanded ? null : item.key) : item.key)}
              className="group relative isolate flex min-h-[42vh] md:h-[64vh] lg:h-[72vh] xl:h-[78vh]
                         outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
              animate={{ flex: expanded ? 1.75 : 1 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
              style={{ flexBasis: 0 }}
            >
              {/* Fondo */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
                <div className="absolute inset-y-6 right-0 w-px bg-white/10" />
              </div>

              {/* Contenido */}
              <div className="relative z-10 flex w-full flex-col justify-end gap-3 p-6 sm:p-8">
                {showTags && item.tag && (
                  <span className="text-xs uppercase tracking-widest text-white/70">{item.tag}</span>
                )}

                <div>
                  {item.eyebrow && (
                    <div className="mb-1 text-sm text-white/80">{item.eyebrow}</div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                {/* Zona reservada para bullets: no empuja el título ni se solapa */}
                <div className="min-h-[72px] sm:min-h-[84px] md:min-h-[96px]">
                  {item.bullets?.length ? (
                    <motion.ul
                      initial={false}
                      animate={{ opacity: expanded ? 1 : 0, y: expanded ? 0 : 6 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-1.5 text-sm text-white/85 pointer-events-none"
                    >
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </motion.ul>
                  ) : null}
                </div>

                <div className="mt-1 flex items-center gap-3">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15 hover:border-white/30"
                  >
                    Explorar <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Separador sutil estilo split */}
              <div
                className="pointer-events-none absolute inset-y-4 -right-2 hidden w-1 rotate-6 rounded-full bg-white/15 shadow md:block"
                aria-hidden
              />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

