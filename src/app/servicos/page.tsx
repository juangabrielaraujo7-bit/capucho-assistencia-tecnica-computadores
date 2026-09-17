import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCardImage } from "@/components/ui/ServiceCardImage";
import { services } from "@/lib/services";
import { iconMap } from "@/lib/icon-map";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Serviços de assistência técnica",
  description:
    "Conheça todos os serviços de assistência técnica da Capucho Informática: formatação, upgrade de SSD e RAM, montagem de PC Gamer, reparo de placa e muito mais.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Serviços"
          title="Todos os nossos serviços"
          description="Assistência técnica completa para notebooks, desktops e PC Gamer."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-deep-blue/[0.06] bg-white"
              >
                <ServiceCardImage image={service.image} alt={service.name} priority={index < 4} />

                <div className="relative flex flex-1 flex-col px-5 pb-5 pt-6">
                  <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-xl bg-deep-blue text-white shadow-lg ring-4 ring-white">
                    <Icon size={17} />
                  </div>
                  <h2 className="text-sm font-semibold text-deep-blue">{service.name}</h2>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-foreground/60">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-electric-blue"
                  >
                    Saiba mais
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            href={buildWhatsAppUrl(defaultWhatsAppMessage)}
            external
            icon={<MessageCircle size={18} />}
          >
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
