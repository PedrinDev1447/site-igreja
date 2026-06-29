import Image from "next/image";
import { SectionBackground } from "@/components/WallpaperBackground";
import { containerMax, sectionX } from "@/lib/layout";

const COMMUNITY_IMAGE =
  "https://images.unsplash.com/photo-1438232999921-c995b841adab?w=960&q=85&auto=format&fit=crop";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden scroll-mt-0">
      <SectionBackground tone="light" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/wallpaper/LOGOS BÍBLICA VIDA SÃO PAULO.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "165px",
        }}
      />

      <div className={`relative z-10 ${containerMax} ${sectionX} py-12 md:py-20 lg:py-28`}>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-2 flex flex-col justify-center md:order-1">
            <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)] md:mb-5 md:text-xs">
              Sobre nós
            </p>

            <div aria-hidden className="mb-6 h-px w-10 bg-[var(--color-text-dark)]/25 md:mb-8" />

            <h2 className="mb-4 font-serif text-2xl font-semibold leading-snug text-balance text-[var(--color-text-dark)] md:mb-6 md:text-3xl md:leading-tight lg:text-4xl xl:text-[2.625rem]">
              Pregamos o verdadeiro evangelho sem vírgulas e pontos a mais.
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-[var(--color-text-muted)] md:text-base lg:text-lg">
              Nossa missão é clara e centrada em Cristo.
            </p>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-full md:order-2 md:mx-0">
            <div
              aria-hidden
              className="absolute -top-3 -right-3 h-full w-full rounded-2xl border border-[var(--color-text-dark)]/[0.06] bg-[var(--color-text-dark)]/[0.04] md:-top-4 md:-right-4 md:rounded-[1.75rem]"
            />

            <div className="group relative h-64 w-full max-w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] md:h-80 md:rounded-[1.75rem] lg:h-96">
              <Image
                src={COMMUNITY_IMAGE}
                alt="Comunidade reunida em adoração"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 520px"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
