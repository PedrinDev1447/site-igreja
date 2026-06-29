import Image from "next/image";
import Link from "next/link";
import VideoPlayerSkeleton from "@/components/VideoPlayerSkeleton";
import { containerMax, sectionX } from "@/lib/layout";

const PATTERN_URL = "/wallpaper/LOGOS BÍBLICA VIDA SÃO PAULO.png";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Pastores", href: "#pastores" },
  { label: "Ministérios", href: "#ministerios" },
  { label: "Contatos", href: "#contato" },
] as const;

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-full overflow-hidden text-white">
      <div aria-hidden className="absolute inset-0 bg-[var(--color-bg-charcoal)]" />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.11]"
        style={{
          backgroundImage: `url('${PATTERN_URL}')`,
          backgroundRepeat: "repeat",
          backgroundSize: "165px",
        }}
      />

      <div className={`relative z-10 ${containerMax} ${sectionX} pb-12 md:pb-20 lg:pb-28`}>
        <header className="flex flex-col items-center gap-4 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4 md:py-5">
          <Link href="/" className="relative group shrink-0 md:justify-self-start">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 top-1/2 left-1/2 h-[200%] w-[180%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 h-[80%] w-full -translate-x-1/2 -translate-y-[40%] rounded-full bg-gradient-to-b from-white/25 via-white/8 to-transparent blur-xl"
            />
            <Image
              src="/wallpaper/logo-biblica-removebg-preview.png"
              alt="Biblica Vida"
              width={220}
              height={86}
              priority
              className="relative h-10 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.4),0_0_32px_rgba(255,255,255,0.22)] transition-all duration-500 group-hover:scale-[1.02] md:h-14 lg:h-16"
            />
          </Link>

          <nav className="w-full md:justify-self-center">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium tracking-wide md:gap-x-7 md:text-sm lg:gap-x-9">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 pointer-events-none invisible md:block md:justify-self-end" aria-hidden>
            <Image
              src="/wallpaper/logo-biblica-removebg-preview.png"
              alt=""
              width={220}
              height={86}
              className="h-14 w-auto object-contain lg:h-16"
            />
          </div>
        </header>

        <div className="flex w-full max-w-full flex-col items-center px-0 pt-6 text-center md:pt-10 lg:pt-12">
          <h1 className="mb-3 font-serif text-2xl font-bold uppercase tracking-[0.08em] md:mb-4 md:text-4xl lg:mb-5 lg:text-5xl xl:text-6xl">
            Biblica Vida
          </h1>

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/70 md:mb-10 md:text-base lg:mb-12 lg:text-lg xl:text-xl">
            Uma comunidade conectada à Palavra de Deus.
          </p>

          <VideoPlayerSkeleton />

          <a
            href="https://share.google/Bn1hUgNkGdJmR5BvN"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-wide text-[var(--color-bg-charcoal)] shadow-lg shadow-black/30 transition-all duration-200 hover:scale-[1.03] hover:bg-white/90 active:scale-[0.98] md:mt-10 md:px-10 md:py-3.5 md:text-base lg:mt-12"
          >
            Visite-nos
          </a>
        </div>
      </div>
    </section>
  );
}
