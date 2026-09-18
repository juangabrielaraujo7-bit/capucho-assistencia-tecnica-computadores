"use client";

import { useEffect, useState } from "react";
import { motion, type Transition } from "framer-motion";

/**
 * Efeito do Hero: notebook real (fotos de peças desmontadas) se monta e,
 * uma vez fechado, a tela mostra o papel de parede trocado pela logo da Capucho.
 * Câmera fixa com leve balanço — com fotos 2D uma rotação 360° completa
 * revelaria as peças de perfil (ficam "de cartolina"), então trocamos por esse
 * balanço sutil (decisão combinada com o cliente).
 */

type Stage = "scattered" | "together" | "closed";

interface Part {
  key: string;
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  z: number;
  scatter: { x: number; y: number; rotate: number };
  delay: number;
}

const parts: Part[] = [
  {
    key: "chassis",
    src: "/hero/parts/chassis.webp",
    left: 22.62,
    top: 78.85,
    width: 68.54,
    height: 21.15,
    z: 10,
    scatter: { x: -60, y: 150, rotate: -10 },
    delay: 0,
  },
  {
    key: "battery",
    src: "/hero/parts/battery.webp",
    left: 22.62,
    top: 64.94,
    width: 54.83,
    height: 13.91,
    z: 20,
    scatter: { x: 110, y: 95, rotate: 14 },
    delay: 0.04,
  },
  {
    key: "leftpanel",
    src: "/hero/parts/leftpanel.webp",
    left: 0,
    top: 54.73,
    width: 20.56,
    height: 20.41,
    z: 25,
    scatter: { x: -150, y: 40, rotate: -25 },
    delay: 0.08,
  },
  {
    key: "rightpanel",
    src: "/hero/parts/rightpanel.webp",
    left: 76.08,
    top: 52.87,
    width: 23.31,
    height: 16.7,
    z: 25,
    scatter: { x: 160, y: 30, rotate: 22 },
    delay: 0.1,
  },
  {
    key: "ramssd",
    src: "/hero/parts/ramssd.webp",
    left: 65.11,
    top: 58.44,
    width: 18.51,
    height: 12.06,
    z: 30,
    scatter: { x: 140, y: -60, rotate: 30 },
    delay: 0.14,
  },
  {
    key: "mainboard",
    src: "/hero/parts/mainboard.webp",
    left: 22.62,
    top: 55.66,
    width: 59.63,
    height: 17.63,
    z: 30,
    scatter: { x: -30, y: -20, rotate: 6 },
    delay: 0.06,
  },
  {
    key: "keyboard",
    src: "/hero/parts/keyboard.webp",
    left: 10.97,
    top: 42.67,
    width: 74.02,
    height: 21.34,
    z: 40,
    scatter: { x: 60, y: -90, rotate: -8 },
    delay: 0.1,
  },
  {
    key: "lid",
    src: "/hero/parts/lid.webp",
    left: 1.37,
    top: 0,
    width: 65.11,
    height: 53.8,
    z: 50,
    scatter: { x: -140, y: -170, rotate: -16 },
    delay: 0,
  },
];

// Cantos reais da tela na foto montada (medidos em px sobre a imagem 622x460
// e convertidos em %): topo-esq, topo-dir, baixo-dir, baixo-esq.
const screenClip =
  "polygon(10.93% 13.70%, 56.75% 12.61%, 66.56% 50.22%, 20.90% 57.17%)";
const screenLogoCenter = { left: "38.8%", top: "33.4%" };

const springTogether: Transition = { type: "spring", stiffness: 120, damping: 16 };
const springScatter: Transition = { type: "spring", stiffness: 90, damping: 15 };
const easeTransition: Transition = { duration: 0.5, ease: "easeOut" };

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

export function PhotoLaptopAssemble() {
  const [reduced] = useState(prefersReducedMotion);
  const [stage, setStage] = useState<Stage>("scattered");

  useEffect(() => {
    let mounted = true;
    let timer: ReturnType<typeof setTimeout>;

    function loop() {
      setStage("together");
      timer = setTimeout(() => {
        if (!mounted) return;
        setStage("closed");
        timer = setTimeout(() => {
          if (!mounted) return;
          setStage("together");
          timer = setTimeout(() => {
            if (!mounted) return;
            setStage("scattered");
            timer = setTimeout(() => {
              if (!mounted) return;
              loop();
            }, 900);
          }, 900);
        }, 3200);
      }, 1600);
    }

    timer = setTimeout(loop, 900);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [reduced]);

  const partsVisible = stage !== "closed";
  const closed = stage === "closed";

  return (
    <div className="relative h-full w-full">
      <div
        className="relative mx-auto h-full w-full"
        style={{ aspectRatio: "1459 / 1078" }}
      >
        {parts.map((part) => (
          <motion.div
            key={part.key}
            className="absolute"
            style={{
              left: `${part.left}%`,
              top: `${part.top}%`,
              width: `${part.width}%`,
              height: `${part.height}%`,
              zIndex: part.z,
            }}
            initial={false}
            animate={
              stage === "scattered"
                ? {
                    x: part.scatter.x,
                    y: part.scatter.y,
                    rotate: part.scatter.rotate,
                    opacity: 0.92,
                    transition: reduced
                      ? easeTransition
                      : { ...springScatter, delay: part.delay },
                  }
                : {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    opacity: partsVisible ? 1 : 0,
                    transition: reduced
                      ? easeTransition
                      : stage === "together"
                        ? { ...springTogether, delay: part.delay }
                        : { duration: 0.5 },
                  }
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={part.src}
              alt=""
              className="h-full w-full object-contain"
              draggable={false}
            />
          </motion.div>
        ))}

        <div
          className="absolute inset-0"
          style={{
            zIndex: 60,
            opacity: closed ? 1 : 0,
            transition: `opacity 0.6s ease ${closed ? "0.25s" : "0s"}`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero/assembled.webp"
            alt="Notebook montado, pronto para uso"
            className="h-full w-full object-contain"
            draggable={false}
          />
          <div
            className="absolute inset-0 bg-white"
            style={{ clipPath: screenClip }}
          />
          <div
            className="absolute"
            style={{
              left: screenLogoCenter.left,
              top: screenLogoCenter.top,
              transform: "translate(-50%, -50%)",
              width: "26%",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-capucho.png"
              alt="Capucho Informática"
              className="w-full object-contain opacity-95"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
