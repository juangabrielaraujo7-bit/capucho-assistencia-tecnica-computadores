export interface PortfolioVideo {
  slug: string;
  title: string;
  description: string;
  src: string;
  poster: string;
}

export const portfolioVideos: PortfolioVideo[] = [
  {
    slug: "manutencao-pc-gamer",
    title: "Manutenção e upgrade de placa de vídeo",
    description: "Manutenção preventiva com upgrade de placa de vídeo em PC Gamer.",
    src: "/videos/manutencao-pc-gamer.mp4",
    poster: "/images/posters/manutencao-pc-gamer.jpg",
  },
  {
    slug: "troca-de-tela",
    title: "Troca de tela de notebook",
    description: "Substituição de tela de notebook com defeito por uma peça original.",
    src: "/videos/troca-de-tela.mp4",
    poster: "/images/posters/troca-de-tela.jpg",
  },
  {
    slug: "troca-de-teclado",
    title: "Troca de teclado",
    description: "Substituição completa de teclado de notebook.",
    src: "/videos/troca-de-teclado.mp4",
    poster: "/images/posters/troca-de-teclado.jpg",
  },
  {
    slug: "troca-dobradica",
    title: "Troca de dobradiça",
    description: "Reparo estrutural com troca de dobradiça de notebook.",
    src: "/videos/troca-dobradica.mp4",
    poster: "/images/posters/troca-dobradica.jpg",
  },
];
