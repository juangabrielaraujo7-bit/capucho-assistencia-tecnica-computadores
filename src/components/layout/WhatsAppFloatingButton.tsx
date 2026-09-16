"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/site-config";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={buildWhatsAppUrl(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Capucho Informática no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-electric-blue text-white shadow-[0_10px_30px_rgba(0,87,255,0.4)] sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-electric-blue blur-xl" />
      <MessageCircle size={26} />
    </motion.a>
  );
}
