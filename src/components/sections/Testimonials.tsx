"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/lib/testimonials";
import { siteConfig } from "@/lib/site-config";

/** Resting tilt/offset per card, cycled by index so any number of testimonials looks organic. */
const cardOffsets = [
  { rotate: -4, y: 10 },
  { rotate: 3, y: -16 },
  { rotate: -6, y: 6 },
  { rotate: 5, y: -8 },
  { rotate: -2, y: 16 },
  { rotate: 4, y: -4 },
];

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-deep-blue py-24 sm:py-28">
      <div
        className="pointer-events-none absolute -left-24 top-10 h-[380px] w-[380px] rounded-full bg-electric-blue/15 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[320px] w-[420px] rounded-full bg-electric-blue/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Depoimentos"
          title="A Capucho é 5 estrelas no Google com quase 400 avaliações"
          theme="dark"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-6">
          {/* Selo do Google apontando para os depoimentos */}
          <div className="relative flex items-center justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <Image
                  src="/images/testimonials/google-reviews-badge.webp"
                  alt="Selo Google Reviews"
                  width={440}
                  height={439}
                  className="w-32 drop-shadow-[0_12px_20px_rgba(0,0,0,0.35)] sm:w-40 lg:w-full"
                />
              </motion.div>
            </motion.div>

            <svg
              viewBox="0 0 160 60"
              fill="none"
              className="hidden lg:absolute lg:-right-16 lg:top-1/2 lg:block lg:w-28 lg:-translate-y-1/2"
              aria-hidden
            >
              <path
                d="M4 44C40 44 50 8 154 8"
                stroke="#0057FF"
                strokeOpacity="0.5"
                strokeWidth="2"
                strokeDasharray="6 7"
                strokeLinecap="round"
              />
              <path
                d="M141 1L155 8L140 15"
                stroke="#0057FF"
                strokeOpacity="0.7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Cards flutuantes */}
          <div className="flex flex-wrap justify-center gap-6 py-6 lg:justify-start lg:py-10">
            {testimonials.map((testimonial, index) => {
              const offset = cardOffsets[index % cardOffsets.length];

              return (
                <motion.div
                  key={testimonial.name}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.6, x: -70, rotate: 0 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, scale: 1, x: 0, rotate: offset.rotate, y: offset.y }
                  }
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.3 }
                      : { type: "spring", stiffness: 260, damping: 22, delay: index * 0.09 }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotate: 0,
                          scale: 1.06,
                          y: offset.y - 10,
                          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                        }
                  }
                  className="flex w-[270px] flex-col rounded-2xl bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] sm:w-[290px]"
                >
                  <div className="flex items-center justify-between">
                    <Image
                      src="/images/testimonials/five-stars.webp"
                      alt="Avaliação 5 estrelas"
                      width={560}
                      height={111}
                      className="h-[18px] w-auto"
                    />
                    <span className="text-[11px] text-foreground/40">{testimonial.timeAgo}</span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/70">
                    &ldquo;{testimonial.comment}&rdquo;
                  </p>
                  <p className="mt-5 text-sm font-semibold text-deep-blue">{testimonial.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-center lg:justify-start">
          <Button href={siteConfig.google.reviewsUrl} external variant="ghost-dark">
            Ver todas as avaliações
          </Button>
        </div>
      </div>
    </section>
  );
}
