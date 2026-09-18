"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Wrench, Gamepad2, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, defaultWhatsAppMessage, siteConfig } from "@/lib/site-config";

const HeroCanvas = dynamic(
  () => import("@/components/three/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

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

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div className="grid-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <HeroCanvas />
      </div>
      <div
        className="pointer-events-none absolute left-0 top-0 h-[420px] w-[560px] rounded-full bg-electric-blue/10 blur-[110px]"
        aria-hidden
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
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
            className="font-display mt-8 max-w-xl text-balance text-4xl font-semibold tracking-tight text-deep-blue sm:text-6xl"
          >
            Tecnologia de alto nível para o seu computador
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
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

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-deep-blue shadow-[0_30px_60px_rgba(7,26,51,0.25)]">
            <Image
              src="/servicos/diagnostico-tecnico.webp"
              alt="Técnico da Capucho Informática realizando diagnóstico em notebook"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-deep-blue/[0.06] bg-white px-5 py-4 shadow-lg sm:-left-6">
            <div className="flex text-electric-blue">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <div className="h-8 w-px bg-deep-blue/10" />
            <p className="text-sm font-semibold text-deep-blue">
              {siteConfig.google.rating.toFixed(1)}{" "}
              <span className="font-normal text-foreground/50">
                · {siteConfig.google.reviewCount} avaliações
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
