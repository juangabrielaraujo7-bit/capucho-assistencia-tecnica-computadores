"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Wrench, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LaptopAssembleEffect } from "@/components/sections/LaptopAssembleEffect";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/site-config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  const float = (amplitude: number, duration: number, delay = 0) =>
    shouldReduceMotion
      ? undefined
      : {
          y: [0, -amplitude, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div
        className="pointer-events-none absolute left-0 top-0 h-[420px] w-[560px] rounded-full bg-electric-blue/10 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[480px] rounded-full bg-electric-blue/[0.06] blur-[130px]"
        aria-hidden
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div animate={float(6, 5)}>
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
              className="font-display mt-8 max-w-xl text-balance text-4xl font-semibold uppercase tracking-tight text-deep-blue sm:text-6xl"
            >
              Quebrou? A Capucho resolve.
            </motion.h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-10"
          >
            <motion.div
              animate={float(5, 4.5, 0.3)}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full bg-electric-blue/10 blur-[80px]"
            aria-hidden
          />
          <motion.div animate={float(10, 6, 0.15)} className="relative">
            <LaptopAssembleEffect />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
