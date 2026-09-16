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

export interface Service {
  slug: string;
  name: string;
  icon: ServiceIcon;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
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
  },
  {
    slug: "diagnostico-e-solucao-de-problemas-tecnicos",
    name: "Diagnóstico e solução de problemas técnicos",
    icon: "SearchCode",
    shortDescription:
      "Diagnóstico técnico preciso para identificar a real causa do problema.",
    longDescription:
      "Utilizamos ferramentas e experiência técnica para diagnosticar com precisão falhas de hardware e software, apresentando um orçamento transparente antes de qualquer execução de serviço.",
    keywords: ["diagnóstico de computador", "notebook não liga", "solução de problemas técnicos"],
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
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
