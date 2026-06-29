import Image from "next/image";

type VideoCard = {
  id: string;
  title: string;
  duration: string;
  image: string;
  href: string;
};

const FEATURED_VIDEOS: VideoCard[] = [
  {
    id: "w2z-jLIwJkQ",
    title: "",
    duration: "",
    image: "https://i.ytimg.com/vi/w2z-jLIwJkQ/hqdefault.jpg",
    href: "https://youtu.be/w2z-jLIwJkQ",
  },
  {
    id: "4IFtWz4omoE",
    title: "",
    duration: "",
    image: "https://i.ytimg.com/vi/4IFtWz4omoE/hqdefault.jpg",
    href: "https://youtu.be/4IFtWz4omoE",
  },
  {
    id: "J8SKo6blfsk",
    title: "",
    duration: "",
    image: "https://i.ytimg.com/vi/J8SKo6blfsk/hqdefault.jpg",
    href: "https://www.youtube.com/live/J8SKo6blfsk",
  },
];

function VideoGrid({ videos }: { videos: VideoCard[] }) {
  return (
    <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:max-w-5xl lg:grid-cols-3">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full max-w-full flex-col gap-3 text-left"
        >
          <div className="relative aspect-video w-full max-w-full overflow-hidden rounded-xl bg-[#111] shadow-[0_4px_24px_rgba(0,0,0,0.4)] ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src={video.image}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
            {video.duration && (
              <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 font-mono text-xs tabular-nums text-white backdrop-blur-sm">
                {video.duration}
              </span>
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>
          <h3 className="line-clamp-2 font-sans text-sm font-medium leading-snug text-white/90 transition-colors group-hover:text-white md:text-base">
            {video.title}
          </h3>
        </a>
      ))}
    </div>
  );
}

export default function YouTubeLives() {
  return <VideoGrid videos={FEATURED_VIDEOS} />;
}
