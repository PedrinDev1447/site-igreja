"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { containerMaxWide, sectionX } from "@/lib/layout";

type Ministerio = {
  id: string;
  titulo: string;
  responsavel: string;
  versiculo: string;
  paragrafos: string[];
  imagem: string;
};

const ministerios: Ministerio[] = [
  {
    id: "min-1",
    titulo: "Ministério de dança",
    responsavel: "Responsável",
    versiculo:
      "Rogo-vos, pois, irmãos, pelas compaixões de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional. (Romanos 12:1)",
    paragrafos: [
      "Muitas vezes, a nossa adoração atinge um ponto em que as palavras já não são suficientes. O coração transborda e a gratidão a Deus exige mais do que a nossa voz; ela exige o nosso ser por inteiro. É exatamente aqui que nasce o Ministério de Dança.",
      "Quando olhamos para Romanos 12:1, encontramos a base bíblica e o coração pulsante do porquê dançamos. A dança cristã nunca foi sobre performance, mas sobre entrega.",
    ],
    imagem:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=85&auto=format&fit=crop",
  },
  {
    id: "min-2",
    titulo: "Ministério dos casais",
    responsavel: "Responsável",
    versiculo:
      "É melhor haver dois do que um, porque duas pessoas trabalhando juntas podem ganhar muito mais. Se uma delas cai, a outra a ajuda a se levantar (Eclesiastes 4:9-10).",
    paragrafos: [
      "Acreditamos que o casamento é a maior parceria da vida, onde o apoio mútuo transforma desafios em força. Nosso propósito é oferecer um espaço dedicado ao fortalecimento da vida a dois, ajudando vocês a construírem um relacionamento sólido, saudável e resiliente.",
      "Estamos aqui para equipar e apoiar o casal, garantindo que superem qualquer obstáculo sempre juntos.",
    ],
    imagem:
      "https://images.unsplash.com/photo-1516583220697-8b378fee7f66?w=800&q=85&auto=format&fit=crop",
  },
  {
    id: "min-3",
    titulo: "Ministério de jovens",
    responsavel: "Responsável",
    versiculo:
      "Alegre-se, jovem, na sua mocidade! Seja feliz o seu coração nos dias da sua juventude! Siga por onde seu coração mandar, até onde a sua vista alcançar; mas saiba que por todas essas coisas Deus o trará a julgamento. (Eclesiastes 11:9)",
    paragrafos: [
      "Para vivermos a plenitude e a liberdade do que diz Eclesiastes 11:9, precisamos de uma direção segura.",
      "Quando fazemos de Deus a nossa bússola, calibramos o nosso coração. Ter Deus como guia significa olhar para a Palavra dEle antes de seguir um impulso, desfrutando da jornada sem perder o destino final.",
    ],
    imagem:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85&auto=format&fit=crop",
  },
  {
    id: "min-4",
    titulo: "Ministério dos kids",
    responsavel: "Responsável",
    versiculo:
      "Deixem vir a mim as crianças e não as impeçam, pois o Reino dos céus pertence aos que são semelhantes a elas. (Mateus 19:14)",
    paragrafos: [
      "Cuidamos das crianças com amor, ensinando a Palavra de forma lúdica e acolhedora, para que desde cedo conheçam o amor de Cristo.",
    ],
    imagem:
      "https://images.unsplash.com/photo-1503454535927-d874d8f0fa08?w=800&q=85&auto=format&fit=crop",
  },
  {
    id: "min-5",
    titulo: "Ministério de louvor",
    responsavel: "Responsável",
    versiculo:
      "Cantem ao Senhor um novo cântico; cantem ao Senhor, todos os habitantes da terra! Cantem ao Senhor, bendigam o seu nome; cada dia proclamem a sua salvação! (Salmos 96:1-2)",
    paragrafos: [
      "Por meio da música e da adoração, elevamos o nome de Jesus e conduzimos a igreja a uma experiência profunda de comunhão com Deus.",
    ],
    imagem:
      "https://images.unsplash.com/photo-1470229723673-ceab1d7d8e71?w=800&q=85&auto=format&fit=crop",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

export default function MinisteriosList() {
  const [current, setCurrent] = useState(0);
  const total = ministerios.length;
  const ministerio = ministerios[current];

  const goTo = (index: number) => {
    setCurrent((index + total) % total);
  };

  return (
    <div className={`relative z-10 w-full max-w-full ${sectionX} py-12 md:py-16 lg:py-20`}>
      <header className="mb-8 flex flex-col items-center text-center md:mb-10 lg:mb-12">
        <h2 className="font-serif text-2xl font-semibold text-[var(--color-text-light)] md:text-3xl lg:text-4xl">
          Nossos ministérios
        </h2>
        <div aria-hidden className="mt-4 h-px w-12 bg-white/30 md:mt-5" />
      </header>

      <div className={`${containerMaxWide} overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_8px_40px_rgba(0,0,0,0.35)] md:rounded-3xl`}>
        <div className="relative w-full max-w-full">
          <AnimatePresence mode="wait">
            <motion.article
              key={ministerio.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) goTo(current + 1);
                else if (info.offset.x > 60) goTo(current - 1);
              }}
              className="grid w-full max-w-full cursor-grab grid-cols-1 active:cursor-grabbing md:grid-cols-2 md:min-h-[480px] lg:min-h-[540px]"
            >
              <div className="relative order-1 h-64 w-full max-w-full md:order-2 md:h-auto md:min-h-[480px] lg:min-h-[540px]">
                <Image
                  src={ministerio.imagem}
                  alt={ministerio.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                  priority={current === 0}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent md:bg-gradient-to-l md:from-neutral-900/30 md:via-transparent md:to-transparent"
                />
              </div>

              <div className="order-2 flex flex-col justify-center space-y-4 px-5 py-6 text-left md:order-1 md:space-y-5 md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
                <div>
                  <h3 className="mb-1 font-serif text-xl font-semibold text-white md:mb-1.5 md:text-2xl lg:text-3xl">
                    {ministerio.titulo}
                  </h3>
                  <span className="text-xs text-gray-400 md:text-sm">{ministerio.responsavel}</span>
                </div>

                <blockquote className="border-l-4 border-white/25 pl-4 text-sm italic leading-relaxed text-gray-300 md:text-base lg:text-lg">
                  &ldquo;{ministerio.versiculo}&rdquo;
                </blockquote>

                <div className="space-y-4 text-sm leading-relaxed text-gray-100 md:text-base lg:text-lg">
                  {ministerio.paragrafos.map((paragrafo, index) => (
                    <p key={index}>{paragrafo}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 border-t border-white/10 bg-neutral-900/80 px-5 py-5 md:gap-5 md:px-8 md:py-6">
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Ministério anterior"
            className="rounded-full p-2 text-gray-400 opacity-70 transition-all duration-200 hover:-translate-x-0.5 hover:bg-white/10 hover:text-white hover:opacity-100 md:p-2.5"
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="flex items-center gap-2">
            {ministerios.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Ir para ${item.titulo}`}
                aria-current={index === current ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-white" : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            aria-label="Próximo ministério"
            className="rounded-full p-2 text-gray-400 opacity-70 transition-all duration-200 hover:translate-x-0.5 hover:bg-white/10 hover:text-white hover:opacity-100 md:p-2.5"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
