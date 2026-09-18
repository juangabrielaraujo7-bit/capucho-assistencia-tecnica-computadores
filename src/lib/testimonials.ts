export interface Testimonial {
  name: string;
  rating: number;
  timeAgo: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Bruno Campos Martins",
    rating: 5,
    timeAgo: "5 meses atrás",
    comment:
      "Excelente profissional! Atencioso, explicativo e sabe o que está fazendo. Serviços feitos: troca de pasta térmica e limpeza de notebook, além de atualização de hardware para o PC. Entenderam minha situação de uso e fizeram a atualização certa para essa necessidade!",
  },
  {
    name: "Sérgio Silveira",
    rating: 5,
    timeAgo: "3 meses atrás",
    comment:
      "Trabalho excelente! Atendimento personalizado que levou em conta as necessidades do cliente, além de serem muito atenciosos. E o mais importante, foi o resultado: meu notebook, de vários anos, após a manutenção, ficou como novo! Recomendo de olhos fechados, pois são parceiros e competentes!",
  },
  {
    name: "Thamiris Vieira",
    rating: 5,
    timeAgo: "2 meses atrás",
    comment:
      "Não é a primeira vez que ele me salva rs. Ótimo profissional, entende o que faz, trabalha com carisma e tem ótimos preços pela qualidade do serviço. Agora será da família e para sempre! Obrigada pela atenção e profissionalismo sempre. Indico de olhos fechados, podem confiar!",
  },
  {
    name: "Lucas Alexandre",
    rating: 5,
    timeAgo: "3 meses atrás",
    comment:
      "Pessoa inacreditável na prestação de serviço. Não só descobriu a causa do problema (um defeito minúsculo no processador) como foi duas vezes atrás de peças e ainda cedeu peças pessoais para resolver. A montagem ficou perfeita, como todos os serviços que já fiz com ele. Serviço fantástico, indico sem medo nenhum!",
  },
];
