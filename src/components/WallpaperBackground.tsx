const PATTERN_URL = "/wallpaper/LOGOS BÍBLICA VIDA SÃO PAULO.png";

type SectionBackgroundProps = {
  tone: "light" | "dark";
};

export function SectionBackground({ tone }: SectionBackgroundProps) {
  const isLight = tone === "light";

  return (
    <>
      <div
        aria-hidden
        className={`absolute inset-0 z-0 ${
          isLight
            ? "bg-gradient-to-b from-[var(--color-bg-ivory)] via-[var(--color-bg-ivory)] to-[var(--color-bg-ivory-deep)]"
            : "bg-gradient-to-b from-[var(--color-bg-charcoal-deep)] via-[var(--color-bg-charcoal)] to-[var(--color-bg-dark)]"
        }`}
      />

      <div
        aria-hidden
        className={`absolute inset-0 z-0 pointer-events-none ${isLight ? "opacity-[0.022]" : "opacity-[0.03]"}`}
        style={{
          backgroundImage: `url('${PATTERN_URL}')`,
          backgroundRepeat: "repeat",
          backgroundSize: "140px",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.7) 0%, transparent 60%)"
            : "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(255,255,255,0.04) 0%, transparent 55%)",
        }}
      />
    </>
  );
}

export function SectionDepth({ tone }: SectionBackgroundProps) {
  return <SectionBackground tone={tone} />;
}
