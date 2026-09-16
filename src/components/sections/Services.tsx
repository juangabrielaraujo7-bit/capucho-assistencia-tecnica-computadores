"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="group flex flex-col rounded-2xl border border-deep-blue/[0.06] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,26,51,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue transition-colors group-hover:bg-electric-blue group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-deep-blue">{service.name}</h3>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
