"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/lib/testimonials";
import { siteConfig } from "@/lib/site-config";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-tech-gray py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confia, recomenda"
          description={`Nota ${siteConfig.google.rating.toFixed(1)} no Google, com ${siteConfig.google.reviewCount} avaliações de clientes reais.`}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl border border-deep-blue/[0.06] bg-white p-7"
            >
              <div className="flex gap-1 text-electric-blue">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-deep-blue">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href={siteConfig.google.reviewsUrl} external variant="ghost">
            Ver todas as avaliações
          </Button>
        </div>
      </div>
    </section>
  );
}
