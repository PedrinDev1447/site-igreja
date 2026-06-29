import Image from "next/image";
import YouTubeLives from "@/components/YouTubeLives";
import { SectionBackground } from "@/components/WallpaperBackground";
import { containerMax, sectionX } from "@/lib/layout";

const CHANNEL_URL = "https://www.youtube.com/@BiblicaVidaSP";

export default function YouTubeSection() {
  return (
    <section id="midia" className="relative overflow-hidden scroll-mt-8 text-white">
      <SectionBackground tone="dark" />

      <div className={`relative z-10 ${containerMax} flex flex-col items-center gap-8 ${sectionX} py-12 md:gap-10 md:py-20 lg:gap-12 lg:py-28`}>
        <div className="w-full max-w-full rounded-2xl border border-white/8 bg-black/50 px-6 py-8 text-center shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm md:max-w-2xl md:px-10 md:py-10 lg:px-12 lg:py-12">
          <h2 className="mb-3 font-serif text-2xl font-semibold tracking-tight md:mb-4 md:text-3xl lg:text-4xl">
            Estamos no YouTube
          </h2>

          <p className="font-serif text-base italic leading-relaxed text-white/75 md:text-lg lg:text-xl">
            Mesmo distante, você se mantém conectado à Palavra de Deus.
          </p>
        </div>

        <div className="w-full max-w-full">
          <YouTubeLives />
        </div>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-red-900/30 transition-all duration-200 hover:scale-[1.02] hover:bg-red-500 hover:shadow-red-900/50 active:scale-[0.98] md:px-8 md:py-3.5"
        >
          <Image src="/icon/icone-youtube.png" alt="" width={20} height={20} aria-hidden />
          Ver no Canal
        </a>
      </div>
    </section>
  );
}
