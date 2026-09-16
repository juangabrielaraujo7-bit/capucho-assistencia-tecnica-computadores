"use client";

import { motion } from "framer-motion";
import { MessageCircle, Wrench, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
      <div className="grid-glow pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-electric-blue/10 blur-[110px]"
        aria-hidden
      />

      <div className="container-page relative flex flex-col items-center text-center">
        <motion.span
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-deep-blue/10 bg-white px-4 py-1.5 text-xs font-medium text-deep-blue/70 shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-electric-blue" />
          Assistência técnica premium em São Paulo
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
          className="mt-8 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-deep-blue sm:text-6xl"
        >
          Tecnologia de alto nível para o seu computador
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            href={buildWhatsAppUrl(defaultWhatsAppMessage)}
            external
            icon={<MessageCircle size={18} />}
          >
            Falar no WhatsApp
          </Button>
          <Button href="/#servicos" variant="ghost" icon={<Wrench size={18} />}>
            Ver serviços
          </Button>
          <Button href="/gamer" variant="secondary" icon={<Gamepad2 size={18} />}>
            Área Gamer
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
