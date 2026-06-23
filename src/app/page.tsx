import Image from "next/image";
import MinisteriosList from "@/components/MinisteriosList";
import PastoresList from "@/components/PastoresList";
import YouTubeLives from "@/components/YouTubeLives";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* Header com Vídeo de Fundo */}
      <header className="relative w-full min-h-[50vh] md:min-h-[70vh] flex flex-col text-text-light overflow-hidden">
        
        {/* Tag de Vídeo Nativa do HTML5 */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          {/* Você substituirá este src pelo nome do seu vídeo final na pasta public */}
          <source src="/video-fundo.mp4" type="video/mp4" />
        </video>

        {/* Overlay Escuro: Garante a leitura do texto independente do vídeo */}
        <div className="absolute inset-0 w-full h-full bg-black/60 -z-10"></div>

        <div className="w-full flex justify-start items-start py-8 px-6 md:px-20 z-10">
          <div className="text-2xl font-bold italic">(Logo)</div>
        </div>

        {/* Título Centralizado no espaço restante */}
        <div className="flex-1 flex flex-col items-center justify-center z-10 pb-16">
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-wide drop-shadow-2xl">
            Biblica Vida
          </h1>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-bg-light text-text-dark py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-6">Pregamos o verdadeiro evangelho sem virgulas e pontos a mais.</h2>
          <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="w-full md:w-1/2 aspect-video bg-gray-300 rounded-2xl flex items-center justify-center italic text-gray-600">Imagem</div>
      </section>

      {/* Video Section */}
      <section className="bg-bg-dark text-text-light py-24 px-6 md:px-20 flex flex-col items-center text-center gap-12">

        {/* Título e Subtítulo */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-serif italic mb-4">Estamos no YouTube</h2>
          {/* Barrinha decorativa clara */}
          <div className="w-16 h-1 bg-[var(--color-text-light)] rounded-full mb-6 opacity-80 mx-auto"></div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
            Mesmo distante, você se mantém conectado à palavra de Deus.
          </p>
        </div>

        

        <div className="w-full mt-8">
          <YouTubeLives />
        </div>

      </section>

      {/* Seção de Pastores */}
      <section className="bg-bg-light text-text-dark py-16">
        <PastoresList />
      </section>


      <section className="bg-bg-dark text-text-light py-24 px-6 md:px-20 flex flex-col items-center">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold italic text-[var(--color-text-light)]">Nossos ministérios</h2>
          <div className="w-16 h-1 bg-[var(--color-text-light)] rounded-full mt-4 opacity-80"></div>
        </div>

        <MinisteriosList />
      </section>

      <footer className="bg-[var(--color-bg-light)] text-[var(--color-text-dark)] py-16 px-6 flex flex-col items-center gap-12">
        <div className="bg-[#E5E5E5] rounded-3xl p-8 md:p-10 flex flex-col items-center w-full max-w-md shadow-sm">
          <a
            href="https://share.google/Bn1hUgNkGdJmR5BvN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-full group cursor-pointer"
          >
            <Image
              src="/icon/icone-de-local.png"
              alt="Localização"
              width={28}
              height={28}
              className="mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"
            />

            <h4 className="text-base md:text-lg font-serif font-bold italic mb-6 text-center border-b border-gray-400 pb-2 w-full group-hover:text-gray-500 transition-colors duration-300">
              R. Santa Eudóxia, 562 - Parque Peruche
            </h4>
          </a>

          <div className="w-full flex flex-col gap-4 text-sm font-medium italic">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span>Domingos</span>
              <span className="text-gray-600">10h às 11h30</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-300 pb-2">
              <span>Quarta-feira</span>
              <span className="text-gray-600">20h às 21h30</span>
            </div>
            <div className="flex justify-between items-center pb-1">
              <span>Ultima sexta-feira do mês</span>
              <span className="text-gray-600">20h às 21h30</span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-center mt-2">
          <a href="https://www.youtube.com/@BiblicaVidaSP" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <Image src="/icon/icone-youtube.png" alt="YouTube" width={44} height={44} />
          </a>
          <a href="https://www.instagram.com/biblicavidasp?igsh=bjU0eHpvcXQxaHFs" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <Image src="/icon/icone-instagram.png" alt="Instagram" width={44} height={44} />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <Image src="/icon/icone-facebook.png" alt="Facebook" width={44} height={44} />
          </a>
        </div>

        <nav className="flex gap-8 text-sm font-medium mt-2">
          <a href="#" className="hover:underline underline-offset-4">Contato</a>
          <a href="#" className="hover:underline underline-offset-4">Doações</a>
          <a href="#" className="hover:underline underline-offset-4">Nos convide</a>
        </nav>
      </footer>
    </main>
  );
}