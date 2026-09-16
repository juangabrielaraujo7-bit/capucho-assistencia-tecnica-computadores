export const siteConfig = {
  name: "Capucho Informática",
  shortName: "Capucho",
  legalName: "Capucho Informática",
  tagline: "Assistência técnica premium para notebooks, desktops e PCs Gamer",
  description:
    "Assistência técnica especializada em notebooks, desktops e PC Gamer em São Paulo. Diagnóstico preciso, peças de qualidade e atendimento profissional. Fale agora pelo WhatsApp.",
  url: "https://www.capuchoinformatica.com.br",
  locale: "pt_BR",
  phoneDisplay: "(11) 94700-9632",
  phoneE164: "+5511947009632",
  whatsappNumber: "5511947009632",
  instagramHandle: "@capucho_informatica",
  instagramUrl: "https://www.instagram.com/capucho_informatica",
  address: {
    street: "Rua Antônio de Couros, 461",
    neighborhood: "Vila Palmeiras",
    city: "São Paulo",
    state: "SP",
    stateFull: "São Paulo",
    zip: "02726-000",
    country: "BR",
    full: "Rua Antônio de Couros, 461 - Vila Palmeiras, São Paulo - SP, 02726-000",
  },
  hours: [
    { days: "Segunda a sexta", time: "09:00 às 22:00" },
    { days: "Sábado", time: "09:00 às 20:00" },
  ],
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "22:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  google: {
    rating: 5.0,
    reviewCount: 363,
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Rua+Ant%C3%B4nio+de+Couros,+461+-+Vila+Palmeiras,+S%C3%A3o+Paulo+-+SP,+02726-000&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+de+Couros%2C+461+-+Vila+Palmeiras%2C+S%C3%A3o+Paulo+-+SP%2C+02726-000",
    reviewsUrl:
      "https://www.google.com/search?q=Capucho+Inform%C3%A1tica+avalia%C3%A7%C3%B5es",
  },
} as const;

export function buildWhatsAppUrl(message: string, phone: string = siteConfig.whatsappNumber) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export const defaultWhatsAppMessage =
  "Olá, Capucho Informática! Gostaria de saber mais sobre os serviços de assistência técnica.";
