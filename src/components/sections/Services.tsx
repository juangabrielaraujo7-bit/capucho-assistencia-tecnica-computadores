import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedServiceCard } from "@/components/sections/FeaturedServiceCard";
import { featuredServiceSlugs, otherServiceSlugs, getServicesBySlugs } from "@/lib/services";

export function Services() {
  const featuredServices = getServicesBySlugs(featuredServiceSlugs);
  const otherServices = getServicesBySlugs(otherServiceSlugs);

  return (
    <section id="servicos" className="bg-tech-gray py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções técnicas para cada necessidade"
          description="Do diagnóstico à entrega, cada serviço é executado com precisão técnica e transparência."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <FeaturedServiceCard
              key={service.slug}
              service={service}
              index={index}
              priority={index < 3}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-deep-blue/[0.06] bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-deep-blue/50">
            Também fazemos
          </p>
          <nav className="mt-4 flex flex-wrap gap-2.5" aria-label="Outros serviços">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="inline-flex items-center rounded-full border border-deep-blue/10 bg-tech-gray px-4 py-2 text-xs font-medium text-deep-blue/70 transition-colors hover:border-electric-blue/40 hover:text-electric-blue"
              >
                {service.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
