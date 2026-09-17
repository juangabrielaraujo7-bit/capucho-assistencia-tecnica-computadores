"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ImageIcon } from "lucide-react";
import type { Service } from "@/lib/services";
import { iconMap } from "@/lib/icon-map";

interface FeaturedServiceCardProps {
  service: Service;
  index: number;
  /** First-row cards load eagerly; the rest lazy-load (next/image's default). */
  priority?: boolean;
}

export function FeaturedServiceCard({ service, index, priority }: FeaturedServiceCardProps) {
  const Icon = iconMap[service.icon];
  const title = service.cardTitle ?? service.name;
  const homeImage = service.homeImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-deep-blue/[0.06] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,26,51,0.1)]"
    >
      <div
        className={
          homeImage !== "placeholder" && homeImage?.fit === "contain"
            ? "relative aspect-video overflow-hidden bg-[radial-gradient(ellipse_at_center,_#eef3ff_0%,_#f4f6f8_65%,_#eceff4_100%)]"
            : "relative aspect-video overflow-hidden bg-tech-gray"
        }
      >
        {homeImage === "placeholder" || !homeImage ? (
          // TODO: substituir pelo placeholder assim que a foto de bancada estiver disponível.
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-deep-blue/30">
            <ImageIcon size={26} strokeWidth={1.5} />
            <span className="text-[11px] font-medium uppercase tracking-wide">Foto em breve</span>
          </div>
        ) : homeImage.fit === "contain" ? (
          <>
            <div
              className="absolute bottom-[10%] left-1/2 h-[12%] w-[50%] -translate-x-1/2 rounded-full bg-deep-blue/15 blur-lg"
              aria-hidden
            />
            <Image
              src={homeImage.src}
              alt={homeImage.alt}
              width={homeImage.width}
              height={homeImage.height}
              {...(priority ? { priority: true } : { loading: "lazy" })}
              className="h-full w-full object-contain p-5 drop-shadow-[0_16px_18px_rgba(7,26,51,0.18)] transition-transform duration-500 group-hover:scale-105"
            />
          </>
        ) : (
          <Image
            src={homeImage.src}
            alt={homeImage.alt}
            width={homeImage.width}
            height={homeImage.height}
            {...(priority ? { priority: true } : { loading: "lazy" })}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="relative flex flex-1 flex-col px-5 pb-5 pt-6">
        <div className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-xl bg-deep-blue text-white shadow-lg ring-4 ring-white transition-colors group-hover:bg-electric-blue">
          <Icon size={17} />
        </div>
        <h3 className="min-h-[2.5rem] text-sm font-semibold leading-snug text-deep-blue">
          {title}
        </h3>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-foreground/60">
          {service.shortDescription}
        </p>
        <Link
          href={`/servicos/${service.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 self-start pt-4 text-xs font-medium text-electric-blue"
        >
          Saiba mais
          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
