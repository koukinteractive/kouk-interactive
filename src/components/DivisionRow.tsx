"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export type DivisionRowProps = {
  tag?: string;
  name: string;
  desc: string;
  bullets: string[];
  href: string;
  art: string;            // imagen desktop
  bannerMobile?: string;  // imagen mobile
  logo?: string;
};

export default function DivisionRow({
  tag, name, desc, bullets, href, art, bannerMobile, logo,
}: DivisionRowProps) {
  return (
    <Card
      className="
        group relative overflow-hidden
        rounded-3xl border border-gray-200
        bg-white text-black
        shadow-[0_6px_30px_rgba(0,0,0,0.08)]
        transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Imagen izquierda */}
        <div className="relative lg:col-span-5">
          <div
            className="
              relative h-[220px] lg:h-full min-h-[220px] overflow-hidden
              rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl
            "
          >
            {/* Desktop */}
            <Image
              src={art}
              alt={name}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              quality={90}
              className="hidden lg:block object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              draggable={false}
            />
            {/* Mobile */}
            {bannerMobile && (
              <Image
                src={bannerMobile}
                alt={name}
                fill
                sizes="100vw"
                quality={90}
                className="lg:hidden object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                draggable={false}
              />
            )}
            {/* Vignette sutil para dar profundidad sin oscurecer demasiado */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Texto derecha */}
        <div className="lg:col-span-7 p-6 lg:p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {logo ? (
              <Image src={logo} alt={`${name} logo`} width={52} height={18} />
            ) : null}
            {tag ? <span className="text-sm text-gray-500">{tag}</span> : null}
          </div>

          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            {name}
          </h3>

          {/* Mantiene tu fuente 'subtitle' pero con color gris Apple-like */}
          <p className="subtitle text-base text-gray-700">{desc}</p>

          <ul className="mt-1 space-y-1 text-sm text-gray-600">
            {bullets.map((b, i) => (
              <li key={i} className="list-disc list-inside">{b}</li>
            ))}
          </ul>

          <div className="mt-4">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:opacity-90"
            >
              Explorar <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

