import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.slug}
                className="flex flex-col rounded-2xl border border-deep-blue/[0.06] bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-deep-blue">{service.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-electric-blue"
                >
                  Saiba mais
                  <ArrowRight size={15} />
                </Link>
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
