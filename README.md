# Biblica Vida — Site Institucional

Site oficial da igreja **Biblica Vida**, desenvolvido com Next.js. Apresenta informações sobre a congregação, pastores, ministérios, transmissões no YouTube e canais de contato.

## Stack tecnológica

| Categoria | Tecnologia |
|-----------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router + Turbopack) |
| Linguagem | [TypeScript 5](https://www.typescriptlang.org/) |
| UI | [React 19](https://react.dev/) |
| Estilização | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animações | [Framer Motion 12](https://www.framer.com/motion/) |
| Compilador | [React Compiler](https://react.dev/learn/react-compiler) |
| Fontes | [Inter](https://fonts.google.com/specimen/Inter) + [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) via `next/font` |

## Funcionalidades

- Hero com logo, navegação por âncoras e área reservada para vídeo de destaque
- Seção institucional “Sobre nós” com layout em duas colunas
- Grade de vídeos em destaque do canal no YouTube
- Listagem de pastores titulares e auxiliares com animações de entrada
- Seção de ministérios com layout alternado
- Rodapé com mapa interativo, horários de culto, endereço e redes sociais
- Identidade visual com padrão de wallpaper e paleta ivory/charcoal

## Estrutura do projeto

```
site-igreja/
├── public/
│   ├── icon/              # Ícones de redes sociais e localização
│   ├── pastores/          # Fotos dos pastores
│   └── wallpaper/         # Logo e padrão visual da marca
├── src/
│   ├── app/
│   │   ├── globals.css    # Tokens de cor e tipografia (@theme)
│   │   ├── layout.tsx     # Layout raiz e fontes
│   │   └── page.tsx       # Página inicial (composição das seções)
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LocationCard.tsx
│   │   ├── MinisteriosList.tsx
│   │   ├── PastoresList.tsx
│   │   ├── VideoPlayerSkeleton.tsx
│   │   ├── WallpaperBackground.tsx
│   │   ├── YouTubeLives.tsx
│   │   └── YouTubeSection.tsx
│   └── lib/
│       └── layout.ts      # Classes utilitárias de espaçamento e container
├── tailwind.config.ts     # Famílias tipográficas estendidas
├── next.config.ts
└── package.json
```

## Design system

As cores e fontes ficam centralizadas em `src/app/globals.css` via `@theme`:

| Token | Uso |
|-------|-----|
| `--color-bg-ivory` / `--color-bg-charcoal` | Fundos claros e escuros das seções |
| `--color-text-dark` / `--color-text-light` | Texto principal |
| `--color-text-muted` | Texto secundário |
| `--font-sans` (Inter) | Corpo e UI |
| `--font-serif` (Playfair Display) | Títulos e destaques |

O componente `SectionBackground` aplica gradientes e o padrão de wallpaper (`public/wallpaper/`) em cada bloco da página.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (ou yarn / pnpm / bun)

## Instalação

```bash
git clone https://github.com/PedrinDev1447/site-igreja.git
cd site-igreja
npm install
```

## Scripts disponíveis

```bash
npm run dev    # Servidor de desenvolvimento
npm run build  # Build de produção
npm run start  # Servidor de produção
npm run lint   # Verificação com ESLint
```

## Desenvolvimento local

Inicie o servidor:

```bash
npm run dev
```

Acesse no navegador:

- **Computador:** [http://localhost:3000](http://localhost:3000)
- **Celular (mesma rede Wi-Fi):** use o endereço exibido em `Network` no terminal (ex.: `http://192.168.x.x:3000`)

O projeto detecta automaticamente os IPs da rede local e libera o acesso mobile em modo de desenvolvimento via `allowedDevOrigins` no `next.config.ts`.

## Conteúdo e assets

| Recurso | Local | Observação |
|---------|-------|------------|
| Vídeos em destaque | `src/components/YouTubeLives.tsx` | Lista estática de IDs do YouTube |
| Fotos dos pastores | `public/pastores/` | PNG por pastor |
| Logo e wallpaper | `public/wallpaper/` | Usados no hero e fundos das seções |
| Horários e endereço | `src/components/LocationCard.tsx` | Atualizar manualmente quando necessário |
| Imagem da seção Sobre | `src/components/AboutSection.tsx` | URL externa (Unsplash) |

Imagens remotas do YouTube (`i.ytimg.com`) e Unsplash estão permitidas em `next.config.ts` → `images.remotePatterns`.

## Deploy

O projeto pode ser implantado em plataformas compatíveis com Next.js, como [Vercel](https://vercel.com/).

## Licença

Projeto privado — uso interno da igreja Biblica Vida.
