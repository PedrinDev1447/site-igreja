"use client";

import { motion } from "framer-motion";

type Ministerio = {
  id: string;
  titulo: string;
  responsavel: string;
  descricao: string;
  imagem: string;
};

const ministerios: Ministerio[] = [
  {
    id: "min-1",
    titulo: "Ministério 1",
    responsavel: "Responsável",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    imagem: "/ministerios/placeholder.png"
  },
  {
    id: "min-2",
    titulo: "Ministério 2",
    responsavel: "Responsável",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    imagem: "/ministerios/placeholder.png"
  },
  {
    id: "min-3",
    titulo: "Ministério 3",
    responsavel: "Responsável",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    imagem: "/ministerios/placeholder.png"
  },
  {
    id: "min-4",
    titulo: "Ministério 4",
    responsavel: "Responsável",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    imagem: "/ministerios/placeholder.png"
  }
];

export default function MinisteriosList() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-16 md:gap-24 px-6">
      {ministerios.map((ministerio, index) => {
        const isPar = index % 2 === 0;

        return (
          <motion.article 
            key={ministerio.id}
            initial={{ opacity: 0, x: isPar ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col items-center gap-8 md:gap-16 ${
              isPar ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className={`flex-1 flex flex-col ${isPar ? "md:text-left text-left" : "md:text-right text-left md:items-end"}`}>
              <h3 className="text-3xl font-serif italic mb-1 text-[var(--color-text-light)]">
                {ministerio.titulo}
              </h3>
              <span className="text-sm italic text-gray-400 mb-4 block">
                {ministerio.responsavel}
              </span>
              <p className="text-sm leading-relaxed text-gray-300 md:max-w-md">
                {ministerio.descricao}
              </p>
            </div>

            <div className="relative w-full md:w-[400px] aspect-[4/3] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-gray-800 italic text-sm">
                Imagem
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
