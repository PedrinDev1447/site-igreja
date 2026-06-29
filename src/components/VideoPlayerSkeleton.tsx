export default function VideoPlayerSkeleton() {
  return (
    <div
      className="relative mx-auto w-full max-w-4xl aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-black/50"
      aria-label="Player de vídeo — placeholder"
    >
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <p className="max-w-full text-center text-white/25 text-[10px] sm:text-xs md:text-sm font-mono tracking-widest uppercase select-none pointer-events-none">
          [RESERVADO PARA VÍDEO DE HIGHLIGHT]
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-t from-black/80 to-transparent">
        <button
          type="button"
          tabIndex={-1}
          aria-hidden
          className="shrink-0 text-white/70"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <span className="text-[10px] sm:text-[11px] text-white/50 font-mono tabular-nums shrink-0">
          0:00 / 0:00
        </span>

        <div className="flex-1 h-1 rounded-full bg-white/15 overflow-hidden">
          <div className="h-full w-0 rounded-full bg-white/40" />
        </div>

        <button type="button" tabIndex={-1} aria-hidden className="shrink-0 text-white/70">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          </svg>
        </button>

        <button type="button" tabIndex={-1} aria-hidden className="shrink-0 text-white/70">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
