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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-deep-blue/[0.06] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,26,51,0.1)]"
              >
                <ServiceCardImage image={service.image} alt={service.name} priority={index < 3} />

                <div className="relative flex flex-1 flex-col px-7 pb-7 pt-8">
                  <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue text-white shadow-lg ring-4 ring-white transition-colors group-hover:bg-electric-blue">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-deep-blue">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-electric-blue"
                  >
                    Saiba mais
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
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
