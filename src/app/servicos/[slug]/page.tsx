import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceCardImage } from "@/components/ui/ServiceCardImage";
import { getServiceBySlug, services } from "@/lib/services";
import { iconMap } from "@/lib/icon-map";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site-config";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const title = `${service.name} em São Paulo`;

  return {
    title,
    description: service.longDescription,
    keywords: service.keywords,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: service.longDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];
  const message = `Olá, Capucho Informática! Gostaria de saber mais sobre o serviço de ${service.name}.`;

  const otherServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <article className="py-20 sm:py-24">
      <div className="container-page max-w-3xl">
        <Link
          href="/servicos"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-deep-blue/60 transition-colors hover:text-electric-blue"
        >
          <ArrowLeft size={15} />
          Todos os serviços
        </Link>

        <div className="relative mt-6">
          <ServiceCardImage
            image={service.image}
            alt={service.name}
            priority
            sizes="(min-width: 768px) 700px, 90vw"
            className="rounded-2xl border border-deep-blue/[0.06]"
          />
          <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-blue text-white shadow-lg ring-4 ring-white">
            <Icon size={24} />
          </div>
        </div>

        <h1 className="font-display mt-12 text-3xl font-semibold tracking-tight text-deep-blue sm:text-4xl">
          {service.name}
        </h1>

        <p className="mt-5 text-base leading-relaxed text-foreground/70">
          {service.longDescription}
        </p>

        <ul className="mt-8 space-y-3">
          {[
            "Diagnóstico técnico antes da execução do serviço",
            "Orçamento transparente, sem surpresas",
            "Peças e componentes de qualidade",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/70">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-electric-blue" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button href={buildWhatsAppUrl(message)} external icon={<MessageCircle size={18} />}>
            Solicitar orçamento no WhatsApp
          </Button>
        </div>

        <div className="mt-16 border-t border-deep-blue/[0.06] pt-10">
          <h2 className="text-lg font-semibold text-deep-blue">Outros serviços</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                href={`/servicos/${item.slug}`}
                className="rounded-xl border border-deep-blue/[0.06] bg-white p-4 text-sm font-medium text-deep-blue transition-colors hover:border-electric-blue/40"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
