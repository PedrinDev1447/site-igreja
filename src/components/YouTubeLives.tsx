import Image from "next/image";

type YouTubeVideo = {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
    publishedAt: string;
  };
};

export default async function YouTubeLives() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID || API_KEY === "sua_chave_aqui") {
    return (
      <div className="w-full text-center p-8 border border-dashed border-gray-500 rounded-2xl text-gray-400 italic">
        Aguardando configuração das chaves da API do YouTube no arquivo .env.local
      </div>
    );
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4&type=video`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) throw new Error("Falha ao buscar vídeos");

    const data = await res.json();
    const videos: YouTubeVideo[] = data.items;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-800 transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
              <Image
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                ASSISTIR
              </div>
            </div>
            <h3 className="text-lg font-serif italic text-text-light group-hover:text-red-400 transition-colors line-clamp-2">
              {video.snippet.title}
            </h3>
          </a>
        ))}
      </div>
    );
  } catch {
    return (
      <div className="text-red-400 text-center italic">
        Não foi possível carregar os vídeos no momento.
      </div>
    );
  }
}
