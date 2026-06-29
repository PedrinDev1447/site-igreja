"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerMaxWide, sectionX } from "@/lib/layout";

type Pastor = {
  nome: string;
  descricao: string;
  imagem: string;
};

const pastores: Pastor[] = [
  {
    nome: "Pr. Kiko",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagem: "/pastores/PrKiko.png",
  },
  {
    nome: "Pra. Giovana",
    descricao:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imagem: "/pastores/PraGiovana.png",
  },
  {
    nome: "Pr. Geneval",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    imagem: "/pastores/PrGeneval.png",
  },
  {
    nome: "Pra. Silvana",
    descricao:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imagem: "/pastores/PrSilvana.png",
  },
  {
    nome: "Pr. Alfredo",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagem: "/pastores/PrAlfredo.png",
  },
  {
    nome: "Pra. Rosângela",
    descricao:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imagem: "/pastores/PraRosangela.png",
  },
  {
    nome: "Pr. Marcos",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagem: "/pastores/PrMarcos.png",
  },
];

const GRID_PASTORES = pastores.slice(0, 4);
const CENTERED_PASTORES = pastores.slice(4);

function PastorCard({ pastor, index }: { pastor: Pastor; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="flex flex-col items-center rounded-xl bg-white px-5 py-7 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.05] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] md:px-6 md:py-8 lg:px-7 lg:py-9"
    >
      <div className="relative mb-5 h-28 w-28 overflow-hidden rounded-full bg-gray-100 shadow-[0_4px_14px_rgba(0,0,0,0.12)] ring-4 ring-white md:mb-6 md:h-32 md:w-32 lg:h-36 lg:w-36">
        <Image
          src={pastor.imagem}
          alt={`Foto de ${pastor.nome}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 112px, 144px"
        />
      </div>

      <h3 className="mb-3 font-serif text-lg font-bold text-[var(--color-text-dark)] md:mb-4 md:text-xl lg:text-[1.375rem]">
        {pastor.nome}
      </h3>

      <p className="text-sm leading-relaxed text-[var(--color-text-muted)] md:text-base">
        {pastor.descricao}
      </p>
    </motion.article>
  );
}

export default function PastoresList() {
  return (
    <div className={`${containerMaxWide} ${sectionX} py-12 md:py-16 lg:py-20`}>
      <header className="mb-10 flex flex-col items-center text-center md:mb-14 lg:mb-16">
        <h2 className="font-serif text-2xl font-semibold text-[var(--color-text-dark)] md:text-3xl lg:text-4xl xl:text-[2.5rem]">
          Nossos pastores
        </h2>
        <div aria-hidden className="mt-5 h-px w-12 bg-[var(--color-text-dark)]/25 md:mt-6" />
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 xl:gap-8">
        {GRID_PASTORES.map((pastor, index) => (
          <PastorCard key={pastor.nome} pastor={pastor} index={index} />
        ))}
      </div>

      <div className="mt-5 flex justify-center md:mt-6 lg:mt-8">
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:max-w-4xl lg:grid-cols-3 lg:gap-7 xl:max-w-[calc(75%-1.3125rem)] xl:gap-8">
          {CENTERED_PASTORES.map((pastor, index) => (
            <PastorCard
              key={pastor.nome}
              pastor={pastor}
              index={index + GRID_PASTORES.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
