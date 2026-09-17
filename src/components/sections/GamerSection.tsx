"use client";

import { motion } from "framer-motion";
import { Gamepad2, Cpu, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const highlights = [
  { icon: Cpu, label: "Montagem de PC Gamer sob medida" },
  { icon: Settings2, label: "Configurações personalizadas por orçamento" },
  { icon: Gamepad2, label: "Projetos entregues para gamers e streamers" },
];

export function GamerSection() {
  return (
    <section id="gamer" className="relative overflow-hidden bg-deep-blue py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-electric-blue/20 blur-[120px]"
        aria-hidden
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-blue">
            Área Gamer
          </span>
          <h2 className="font-display mt-5 max-w-lg text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Performance e estética para o seu setup gamer
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Montagem de PC Gamer com componentes selecionados, configurações
            personalizadas e acompanhamento técnico do início ao fim.
          </p>
          <div className="mt-8">
            <Button href="/gamer" icon={<Gamepad2 size={18} />}>
              Conheça nossa área Gamer
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-blue/20 text-electric-blue">
                <item.icon size={20} />
              </div>
              <p className="text-sm font-medium text-white/80">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
