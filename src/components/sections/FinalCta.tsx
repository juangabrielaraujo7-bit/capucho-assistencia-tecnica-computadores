"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue/10 blur-[100px]"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="container-page relative flex flex-col items-center text-center"
      >
        <h2 className="font-display max-w-2xl text-balance text-3xl font-semibold tracking-tight text-deep-blue sm:text-4xl">
          Seu computador merece um atendimento à altura
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
          Fale agora com a Capucho Informática e receba um diagnóstico rápido e transparente.
        </p>
        <div className="mt-9">
          <Button
            href={buildWhatsAppUrl(defaultWhatsAppMessage)}
            external
            icon={<MessageCircle size={18} />}
          >
            Falar no WhatsApp agora
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
