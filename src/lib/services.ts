export type ServiceIcon =
  | "HardDriveDownload"
  | "MemoryStick"
  | "Cpu"
  | "Wrench"
  | "Gamepad2"
  | "ShieldCheck"
  | "SearchCode"
  | "CircuitBoard"
  | "AppWindow"
  | "MonitorSmartphone";

export interface ServiceImage {
  src: string;
  /** CSS object-position value, used only when fit is "cover" (the default). */
  position?: string;
  /** "cover" fills the frame (photos). "contain" floats the subject on the card background (cutouts). */
  fit?: "cover" | "contain";
}

export interface HomeCardImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** "cover" fills the 16:9 frame (default). "contain" floats a cutout on a soft gradient backdrop. */
  fit?: "cover" | "contain";
}

export interface Service {
  slug: string;
  name: string;
  icon: ServiceIcon;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
  image: ServiceImage;
  /** Shorter title for the home page's featured card, where a one-line title keeps card heights aligned. */
  cardTitle?: string;
  /**
   * 16:9 photo used only by the home page's featured services grid.
   * "placeholder" means no suitable photo exists yet (see TODO at the usage site).
   */
  homeImage?: HomeCardImage | "placeholder";
}

export const services: Service[] = [
  {
    slug: "formatacao-com-backup",
    name: "Formatação com backup",
    icon: "HardDriveDownload",
    shortDescription:
      "Formatação segura com backup completo dos seus arquivos antes de qualquer alteração.",
    longDescription:
      "Realizamos a formatação completa do seu notebook ou desktop com backup prévio de todos os seus arquivos, fotos e documentos. O processo é feito com segurança, garantindo que nenhum dado seja perdido e que o equipamento volte a funcionar com máxima performance.",
    keywords: ["formatação de notebook", "backup de dados", "formatação com segurança São Paulo"],
    image: { src: "/images/services/formatacao-com-backup.jpg" },
    homeImage: {
      src: "/servicos/formatacao-backup.webp",
      alt: "HD externo conectado a notebook durante backup de arquivos",
      width: 960,
      height: 540,
    },
  },
  {
    slug: "upgrade-de-ssd",
    name: "Upgrade de SSD",
    icon: "HardDriveDownload",
    shortDescription:
      "Troque o HD por um SSD e ganhe velocidade real no seu notebook ou desktop.",
    longDescription:
      "Instalamos SSDs de alta qualidade em notebooks e desktops, com migração completa do sistema operacional e dos arquivos. O resultado é um computador muito mais rápido para ligar, abrir programas e rodar o dia a dia de trabalho.",
    keywords: ["upgrade de SSD", "troca de HD por SSD", "computador lento São Paulo"],
    image: { src: "/images/services/upgrade-de-ssd.jpg", position: "50% 72%" },
    homeImage: {
      src: "/servicos/upgrade-ssd.webp",
      alt: "SSD NVMe ao lado de notebook aberto para upgrade de armazenamento",
      width: 960,
      height: 540,
    },
  },
  {
    slug: "upgrade-de-memoria-ram",
    name: "Upgrade de memória RAM",
    icon: "MemoryStick",
    shortDescription:
      "Aumente a memória RAM e melhore o desempenho para multitarefas e jogos.",
    longDescription:
      "Analisamos a placa-mãe e o sistema para indicar o melhor upgrade de memória RAM, aumentando a capacidade de multitarefa, a fluidez em jogos e a performance geral do seu computador.",
    keywords: ["upgrade de memória RAM", "aumentar RAM notebook", "computador travando"],
    image: { src: "/images/services/upgrade-de-memoria-ram.jpg" },
  },
  {
    slug: "troca-de-hardware",
    name: "Troca de hardware",
    icon: "Cpu",
    shortDescription:
      "Substituição de componentes internos com peças de qualidade e garantia.",
    longDescription:
      "Realizamos a troca de placas, fontes, coolers, baterias e demais componentes de hardware, sempre utilizando peças confiáveis e com garantia do serviço executado.",
    keywords: ["troca de hardware", "conserto de placa-mãe", "assistência técnica de computadores"],
    image: { src: "/images/services/troca-de-hardware.jpg" },
  },
  {
    slug: "montagem-de-pc-gamer",
    name: "Montagem de PC Gamer",
    icon: "Gamepad2",
    shortDescription:
      "Montagem personalizada de PC Gamer de acordo com seu orçamento e objetivo.",
    longDescription:
      "Montamos PCs Gamer personalizados, com seleção de componentes compatíveis e otimizados para o seu orçamento, seja para jogos, streaming ou produtividade. Consultoria técnica completa do início ao fim.",
    keywords: ["montagem de PC Gamer", "PC Gamer sob medida São Paulo", "monte seu PC"],
    image: { src: "/images/services/montagem-de-pc-gamer.png", fit: "contain" },
    // TODO: substituir por uma foto de bancada quando houver uma disponível (o recorte atual
    // veio de uma foto de estúdio; funciona bem "flutuando" sobre um fundo, mas destoa das
    // fotos de bancada usadas nos outros cards).
    homeImage: {
      src: "/images/services/montagem-de-pc-gamer.png",
      alt: "Gabinete de PC Gamer com iluminação RGB roxa e componentes internos à mostra",
      width: 650,
      height: 866,
      fit: "contain",
    },
  },
  {
    slug: "manutencao-preventiva",
    name: "Manutenção preventiva",
    icon: "ShieldCheck",
    shortDescription:
      "Limpeza interna, troca de pasta térmica e revisão geral para evitar problemas.",
    longDescription:
      "A manutenção preventiva inclui limpeza interna, troca de pasta térmica, revisão de coolers e verificação geral do equipamento, evitando superaquecimento, travamentos e falhas futuras.",
    keywords: ["manutenção preventiva de notebook", "limpeza interna computador", "pasta térmica"],
    image: { src: "/images/services/manutencao-preventiva.jpg", position: "58% 50%" },
    homeImage: {
      src: "/servicos/manutencao-preventiva.webp",
      alt: "Aplicação de pasta térmica no processador durante manutenção preventiva",
      width: 960,
      height: 540,
    },
  },
  {
    slug: "diagnostico-e-solucao-de-problemas-tecnicos",
    name: "Diagnóstico e solução de problemas técnicos",
    cardTitle: "Diagnóstico técnico",
    icon: "SearchCode",
    shortDescription:
      "Diagnóstico técnico preciso para identificar a real causa do problema.",
    longDescription:
      "Utilizamos ferramentas e experiência técnica para diagnosticar com precisão falhas de hardware e software, apresentando um orçamento transparente antes de qualquer execução de serviço.",
    keywords: ["diagnóstico de computador", "notebook não liga", "solução de problemas técnicos"],
    image: { src: "/images/services/diagnostico.jpg", position: "50% 42%" },
    homeImage: {
      src: "/servicos/diagnostico-tecnico.webp",
      alt: "Técnico realizando diagnóstico em placa-mãe de notebook aberto",
      width: 960,
      height: 540,
    },
  },
  {
    slug: "reparo-de-placa",
    name: "Reparo de placa",
    icon: "CircuitBoard",
    shortDescription:
      "Reparo especializado em placas-mãe e placas de vídeo.",
    longDescription:
      "Executamos reparo em nível de componente em placas-mãe e placas de vídeo, incluindo troca de capacitores, conectores de energia e outros componentes danificados.",
    keywords: ["reparo de placa-mãe", "conserto de placa de vídeo", "solda de componentes"],
    image: { src: "/images/services/reparo-de-placa.jpg", position: "50% 40%" },
  },
  {
    slug: "instalacao-de-softwares",
    name: "Instalação de softwares",
    icon: "AppWindow",
    shortDescription:
      "Instalação e configuração de sistemas operacionais e programas essenciais.",
    longDescription:
      "Instalamos sistemas operacionais originais, drivers, pacotes de segurança e os softwares essenciais para o seu trabalho ou estudo, com tudo configurado e pronto para uso.",
    keywords: ["instalação de Windows", "instalação de programas", "configuração de software"],
    image: { src: "/images/services/instalacao-de-softwares.jpg", position: "50% 35%" },
  },
  {
    slug: "troca-de-tela-notebook",
    name: "Troca de tela notebook",
    icon: "MonitorSmartphone",
    shortDescription:
      "Substituição de telas de notebook trincadas, queimadas ou com defeito.",
    longDescription:
      "Trocamos telas de notebook com defeito, trincadas ou queimadas, utilizando peças compatíveis com o modelo do seu equipamento, devolvendo a qualidade de imagem original.",
    keywords: ["troca de tela de notebook", "conserto de tela notebook São Paulo", "tela quebrada"],
    image: { src: "/images/services/troca-de-tela-notebook.jpg" },
    homeImage: {
      src: "/servicos/troca-tela-notebook.webp",
      alt: "Notebook com tela danificada apresentando falha de imagem",
      width: 960,
      height: 540,
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Order for the home page's featured services grid (6 cards, each with a photo). */
export const featuredServiceSlugs = [
  "diagnostico-e-solucao-de-problemas-tecnicos",
  "formatacao-com-backup",
  "upgrade-de-ssd",
  "manutencao-preventiva",
  "troca-de-tela-notebook",
  "montagem-de-pc-gamer",
] as const;

/** The remaining services, listed as plain links below the featured grid on the home page. */
export const otherServiceSlugs = [
  "reparo-de-placa",
  "instalacao-de-softwares",
  "upgrade-de-memoria-ram",
  "troca-de-hardware",
] as const;

export function getServicesBySlugs(slugs: readonly string[]): Service[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is Service => service !== undefined);
}
