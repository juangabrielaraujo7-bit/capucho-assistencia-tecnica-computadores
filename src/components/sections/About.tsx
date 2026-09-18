"use client";

import { motion } from "framer-motion";
import { Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Especialização",
    description: "Foco total em notebooks, desktops e PC Gamer, sem generalismo.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento",
    description: "Comunicação clara, direta e sem termos técnicos desnecessários.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança",
    description: "Nota 5,0 no Google com centenas de avaliações reais.",
  },
  {
    icon: Sparkles,
    title: "Experiência",
    description: "Anos de bancada resolvendo os casos mais complexos.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Sobre" title="Por que escolher a Capucho?" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-deep-blue/[0.06] bg-white p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue">
                <reason.icon size={22} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-deep-blue">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
