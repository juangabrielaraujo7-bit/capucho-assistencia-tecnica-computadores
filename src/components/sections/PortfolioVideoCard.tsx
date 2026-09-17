"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { PortfolioVideo } from "@/lib/portfolio";

interface PortfolioVideoCardProps {
  video: PortfolioVideo;
  index: number;
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function PortfolioVideoCard({ video, index }: PortfolioVideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      custom={(index % 4) * 0.08}
      variants={item}
      whileHover={{ y: -4 }}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-deep-blue/[0.06] bg-deep-blue shadow-[0_12px_30px_rgba(7,26,51,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(7,26,51,0.16)]"
    >
      {playing ? (
        <video
          className="h-full w-full object-cover"
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Assistir vídeo: ${video.title}`}
          className="relative h-full w-full text-left"
        >
          <Image
            src={video.poster}
            alt={video.title}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/85 via-deep-blue/10 to-transparent" />

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-deep-blue shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </span>
          </span>

          <span className="absolute inset-x-0 bottom-0 p-4">
            <span className="block text-sm font-semibold text-white">{video.title}</span>
            <span className="mt-1 block text-xs leading-relaxed text-white/70">
              {video.description}
            </span>
          </span>
        </button>
      )}
    </motion.div>
  );
}
