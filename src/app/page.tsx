import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import LocationCard from "@/components/LocationCard";
import MinisteriosList from "@/components/MinisteriosList";
import PastoresList from "@/components/PastoresList";
import YouTubeSection from "@/components/YouTubeSection";
import { SectionBackground } from "@/components/WallpaperBackground";
import { sectionX } from "@/lib/layout";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full max-w-full flex-col overflow-x-hidden font-sans">
      <HeroSection />

      <AboutSection />

      <YouTubeSection />

      <section id="pastores" className="relative scroll-mt-8 text-text-dark py-12 md:py-16 lg:py-20">
        <SectionBackground tone="light" />
        <div className="relative z-10">
          <PastoresList />
        </div>
      </section>

      <section
        id="ministerios"
        className="relative flex scroll-mt-8 flex-col items-center overflow-hidden text-text-light"
      >
        <SectionBackground tone="dark" />
        <MinisteriosList />
      </section>

      <footer
        id="contato"
        className={`relative flex scroll-mt-8 flex-col items-center gap-8 py-12 md:gap-10 md:py-16 lg:gap-12 lg:py-20 ${sectionX}`}
      >
        <SectionBackground tone="light" />
        <LocationCard />

        <div className="relative z-10 flex items-center gap-5 md:gap-6">
          <a
            href="https://www.youtube.com/@BiblicaVidaSP"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <Image src="/icon/icone-youtube.png" alt="YouTube" width={40} height={40} className="md:h-11 md:w-11" />
          </a>
          <a
            href="https://www.instagram.com/biblicavidasp?igsh=bjU0eHpvcXQxaHFs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <Image src="/icon/icone-instagram.png" alt="Instagram" width={40} height={40} className="md:h-11 md:w-11" />
          </a>
          <a href="#" className="transition-transform duration-300 hover:scale-110">
            <Image src="/icon/icone-facebook.png" alt="Facebook" width={40} height={40} className="md:h-11 md:w-11" />
          </a>
        </div>

        <nav className="relative z-10 flex flex-wrap justify-center gap-5 text-sm font-medium md:gap-8">
          <a href="#contato" className="hover:underline underline-offset-4">
            Contato
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Doações
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Nos convide
          </a>
        </nav>

        <p className="relative z-10 px-4 text-center text-xs text-[var(--color-text-muted)]">
          Direitos reservados Biblica Vida&reg; 2026
        </p>
      </footer>
    </main>
  );
}
