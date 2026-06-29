<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Guia do projeto — Biblica Vida

Site institucional single-page em Next.js 16 (App Router). A página principal (`src/app/page.tsx`) compõe seções independentes; evite inflar esse arquivo — extraia novos blocos para `src/components/`.

## Convenções

- **Estilo:** Tailwind CSS 4 com tokens em `src/app/globals.css` (`@theme`). Prefira variáveis `--color-*` e `--font-*` em vez de cores hardcoded.
- **Layout:** Reutilize utilitários de `src/lib/layout.ts` (`sectionX`, `containerMax`, etc.) para manter espaçamento consistente.
- **Fundos de seção:** Use `SectionBackground` de `WallpaperBackground.tsx` com `tone="light"` ou `tone="dark"`.
- **Tipografia:** Inter para corpo (`font-sans`), Playfair Display para títulos (`font-serif` / `font-heading`).
- **Imagens:** Assets locais em `public/`; domínios externos precisam estar em `next.config.ts` → `images.remotePatterns`.
- **Comentários:** Código autoexplicativo; comentários só para lógica não óbvia.

## Seções da página

| ID / âncora | Componente | Descrição |
|-------------|------------|-----------|
| (topo) | `HeroSection` | Logo, nav, placeholder de vídeo, CTA |
| `#sobre` | `AboutSection` | Texto institucional + imagem |
| `#midia` | `YouTubeSection` | Vídeos via `YouTubeLives` |
| `#pastores` | `PastoresList` | Grid de pastores |
| `#ministerios` | `MinisteriosList` | Cards alternados |
| `#contato` | `LocationCard` + footer em `page.tsx` | Mapa, horários, redes |

## Onde editar conteúdo

- Vídeos do YouTube: `FEATURED_VIDEOS` em `YouTubeLives.tsx`
- Pastores: dados em `PastoresList.tsx`
- Ministérios: dados em `MinisteriosList.tsx`
- Endereço e horários: constantes em `LocationCard.tsx`
- Metadados SEO: `src/app/layout.tsx`

## Comandos

```bash
npm run dev    # desenvolvimento
npm run build  # build de produção
npm run lint   # ESLint
```
