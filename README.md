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
| Fontes | [Geist](https://vercel.com/font) via `next/font` |
| API externa | YouTube Data API v3 |

## Funcionalidades

- Header com vídeo de fundo em loop
- Seção hero com mensagem institucional
- Feed dinâmico dos últimos vídeos do canal no YouTube
- Listagem de pastores titulares e auxiliares com animações de entrada
- Seção de ministérios com layout alternado
- Rodapé com endereço, horários de culto e redes sociais

## Estrutura do projeto

```
site-igreja/
├── public/
│   ├── icon/          # Ícones de redes sociais e localização
│   └── pastores/      # Fotos dos pastores
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── MinisteriosList.tsx
│       ├── PastoresList.tsx
│       └── YouTubeLives.tsx
├── next.config.ts
└── package.json
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (ou yarn / pnpm / bun)

## Instalação

```bash
git clone https://github.com/PedrinDev1447/site-igreja.git
cd site-igreja
npm install
```

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
YOUTUBE_API_KEY=sua_chave_da_api
YOUTUBE_CHANNEL_ID=id_do_canal
```

Sem essas variáveis, a seção de vídeos exibe uma mensagem de configuração pendente.

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

## Assets pendentes

- `public/video-fundo.mp4` — vídeo de fundo do header (ainda não incluído)
- Imagens dos ministérios em `public/ministerios/`

## Deploy

O projeto pode ser implantado em plataformas compatíveis com Next.js, como [Vercel](https://vercel.com/). Configure as variáveis de ambiente do YouTube no painel da plataforma antes do deploy.

## Licença

Projeto privado — uso interno da igreja Biblica Vida.
