export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marcos Silva",
    rating: 5,
    comment:
      "Levei meu notebook travando demais e voltou parecendo novo. Upgrade de SSD fez toda a diferença. Atendimento muito profissional.",
  },
  {
    name: "Ana Paula Ferreira",
    rating: 5,
    comment:
      "Montaram meu PC Gamer exatamente dentro do orçamento que eu tinha. Explicaram cada peça e o resultado ficou excelente.",
  },
  {
    name: "Rodrigo Mendes",
    rating: 5,
    comment:
      "Diagnóstico rápido e honesto. Não tentaram vender nada desnecessário, resolveram o problema real da minha placa-mãe.",
  },
];
