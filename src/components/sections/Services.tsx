"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCardImage } from "@/components/ui/ServiceCardImage";
import { services } from "@/lib/services";
import { iconMap } from "@/lib/icon-map";

export function Services() {
  return (
    <section id="servicos" className="bg-tech-gray py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções técnicas para cada necessidade"
          description="Do diagnóstico à entrega, cada serviço é executado com precisão técnica e transparência."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-deep-blue/[0.06] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,26,51,0.1)]"
              >
                <ServiceCardImage image={service.image} alt={service.name} priority={index < 4} />

                <div className="relative flex flex-1 flex-col px-5 pb-5 pt-6">
                  <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-xl bg-deep-blue text-white shadow-lg ring-4 ring-white transition-colors group-hover:bg-electric-blue">
                    <Icon size={17} />
                  </div>
                  <h3 className="text-sm font-semibold text-deep-blue">{service.name}</h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-foreground/60">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-electric-blue"
                  >
                    Saiba mais
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
