"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const placeholders = Array.from({ length: 6 }, (_, index) => index);

export function Portfolio() {
  return (
    <section id="realizados" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfólio"
          title="Serviços realizados"
          description="Em breve, uma vitrine com fotos reais dos equipamentos que já passaram pela nossa bancada."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {placeholders.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: item * 0.06 }}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-deep-blue/15 bg-tech-gray text-deep-blue/30"
            >
              <ImageIcon size={26} strokeWidth={1.5} />
              <span className="text-[11px] font-medium uppercase tracking-wide">Em breve</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
