import Image from "next/image";

const ADDRESS = "R. Santa Eudóxia, 562 - Parque Peruche, São Paulo";
const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=R.+Santa+Eud%C3%B3xia,+562+-+Parque+Peruche,+S%C3%A3o+Paulo+-+SP";
const MAP_EMBED =
  "https://maps.google.com/maps?q=R.+Santa+Eud%C3%B3xia,+562+-+Parque+Peruche,+S%C3%A3o+Paulo+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed";

const HORARIOS = [
  { dia: "Domingos", horario: "10h às 11h30" },
  { dia: "Quarta-feira", horario: "20h às 21h30" },
  { dia: "Ultima sexta-feira do mês", horario: "20h às 21h30" },
] as const;

export default function LocationCard() {
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-black/5 md:grid-cols-2 md:rounded-3xl">
      <div className="relative h-64 w-full max-w-full md:h-80 lg:h-96">
        <iframe
          title={`Mapa — ${ADDRESS}`}
          src={MAP_EMBED}
          className="pointer-events-none absolute inset-0 h-full w-full max-w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <a
          href={MAPS_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent p-4 md:p-5"
          aria-label={`Abrir rota no Google Maps para ${ADDRESS}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[var(--color-text-dark)] shadow-lg transition-colors duration-200 group-hover:bg-[var(--color-text-dark)] group-hover:text-white md:px-5 md:py-2.5 md:text-sm">
            <Image
              src="/icon/icone-de-local.png"
              alt=""
              width={16}
              height={16}
              aria-hidden
              className="opacity-80 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
            />
            Ver rota no Maps
          </span>
        </a>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 xl:p-12">
        <a
          href={MAPS_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-5 flex w-full flex-col items-center md:mb-6 md:items-start"
        >
          <Image
            src="/icon/icone-de-local.png"
            alt=""
            width={28}
            height={28}
            aria-hidden
            className="mb-3 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 md:mb-4"
          />

          <h4 className="w-full border-b border-gray-300/80 pb-2 text-center font-serif text-sm font-semibold transition-colors duration-300 group-hover:text-[var(--color-text-muted)] md:text-left md:text-base lg:text-lg">
            {ADDRESS}
          </h4>
        </a>

        <div className="flex w-full flex-col gap-3 text-xs font-medium md:gap-4 md:text-sm">
          {HORARIOS.map(({ dia, horario }, index) => (
            <div
              key={dia}
              className={`flex items-center justify-between gap-3 ${
                index < HORARIOS.length - 1 ? "border-b border-gray-200 pb-2" : "pb-1"
              }`}
            >
              <span className="text-left">{dia}</span>
              <span className="shrink-0 text-[var(--color-text-muted)]">{horario}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
