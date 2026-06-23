"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Pastor = {
  nome: string;
  descricao: string;
  imagem: string;
};

const pastores: Pastor[] = [
  {
    nome: "Pr. Kiko",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagem: "/pastores/PrKiko.png"
  },
  {
    nome: "Pra. Giovana",
    descricao: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imagem: "/pastores/PraGiovana.png"
  },
  {
    nome: "Pr. Marcos",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imagem: "/pastores/PrMarcos.png"
  },
  {
    nome: "Pra. Rosângela",
    descricao: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imagem: "/pastores/PraRosangela.png"
  },
  {
    nome: "Pr. Geneval",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    imagem: "/pastores/PrGeneval.png"
  },
  {
    nome: "Pr. Alfredo",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagem: "/pastores/PrAlfredo.png"
  },
  {
    nome: "Pra. Silvana",
    descricao: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imagem: "/pastores/PrSilvana.png"
  }
];

export default function PastoresList() {
  const titulares = pastores.slice(0, 2);
  const auxiliares = pastores.slice(2);

  const renderPastor = (pastor: Pastor, globalIndex: number) => {
    const isPar = globalIndex % 2 === 0;

    return (
      <motion.article 
        key={pastor.nome}
        initial={{ opacity: 0, x: isPar ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex flex-col items-center gap-8 md:gap-16 ${
          isPar ? 'md:flex-row text-left' : 'md:flex-row-reverse md:text-right text-left'
        }`}
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 flex-shrink-0 rounded-full border-4 border-[var(--color-bg-light)] overflow-hidden bg-gray-200">
          <Image 
            src={pastor.imagem} 
            alt={`Foto de ${pastor.nome}`} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 14rem, 18rem"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-serif italic mb-4 text-[var(--color-text-dark)]">{pastor.nome}</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            {pastor.descricao}
          </p>
        </div>
      </motion.article>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-6">
      
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-dark)]">Pastores titulares</h2>
        <div className="w-16 h-1 bg-[var(--color-text-dark)] rounded-full mt-4 opacity-80"></div>
      </div>

      <div className="flex flex-col gap-16 md:gap-24 w-full mb-24">
        {titulares.map((pastor, index) => renderPastor(pastor, index))}
      </div>

      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-text-dark)]">Pastores auxiliares</h2>
        <div className="w-16 h-1 bg-[var(--color-text-dark)] rounded-full mt-4 opacity-80"></div>
      </div>

      <div className="flex flex-col gap-16 md:gap-24 w-full">
        {auxiliares.map((pastor, index) => renderPastor(pastor, index + 2))}
      </div>

    </div>
  );
}
