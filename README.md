# Capucho Informática

Site institucional da **Capucho Informática**, assistência técnica especializada em
notebooks, desktops e PC Gamer em São Paulo/SP. Foco em conversão via WhatsApp,
apresentação dos serviços e SEO local.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura

- `src/app` — rotas (App Router): home, `/servicos`, `/servicos/[slug]`, `/gamer`,
  além de `sitemap.ts` e `robots.ts` para SEO.
- `src/components/layout` — Header, Footer e botão flutuante de WhatsApp.
- `src/components/sections` — seções da home (Hero, Serviços, Portfólio,
  Depoimentos, Área Gamer, Sobre, Localização/Contato, CTA final).
- `src/components/ui` — componentes reutilizáveis (Button, SectionHeading, ícones).
- `src/lib` — configuração central da empresa (`site-config.ts`), catálogo de
  serviços (`services.ts`) e depoimentos (`testimonials.ts`).

## Conteúdo editável

- Dados da empresa (telefone, endereço, horários, redes sociais, avaliações do
  Google): `src/lib/site-config.ts`.
- Lista de serviços (usada na home, em `/servicos` e nas páginas individuais):
  `src/lib/services.ts`.
- Depoimentos: `src/lib/testimonials.ts`.
- Logo oficial: `public/images/logo-capucho.png`.

## Formulário de contato

O formulário não armazena dados — ele monta uma mensagem estruturada e abre o
WhatsApp da empresa com o texto já preenchido.

## Deploy

- Versionamento: GitHub.
- Publicação recomendada: [Vercel](https://vercel.com/new).

Antes de publicar em produção, atualize `siteConfig.url` em
`src/lib/site-config.ts` com o domínio final do site (usado em metadados, SEO e
schema `LocalBusiness`).
