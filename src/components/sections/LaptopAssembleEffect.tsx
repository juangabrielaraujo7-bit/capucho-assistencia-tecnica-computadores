"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * TESTE / PROTÓTIPO — versão inicial para validar a ideia antes de refinar.
 *
 * Ilustração 2D (SVG) de um notebook estilizado, feita de "peças" soltas que se
 * encaixam formando o aparelho inteiro; ao montar, a tela liga (fundo branco +
 * logo da Capucho). Repete em loop lento. Não é um modelo 3D real — usei SVG
 * porque não temos um asset 3D do notebook, e um ícone plano fica leve e
 * fácil de ajustar (ver mensagem sobre o que falta pra evoluir isso).
 */

const springAssemble = { type: "spring", stiffness: 190, damping: 17 } as const;
const springScatter = { type: "spring", stiffness: 140, damping: 16 } as const;

function partVariants(scattered: { x: number; y: number; rotate: number }, delay: number): Variants {
  return {
    scattered: {
      x: scattered.x,
      y: scattered.y,
      rotate: scattered.rotate,
      opacity: 0.85,
      transition: { ...springScatter, delay: delay * 0.4 },
    },
    assembled: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: { ...springAssemble, delay },
    },
  };
}

export function LaptopAssembleEffect() {
  const shouldReduceMotion = useReducedMotion();
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsAssembled(true);
      return;
    }

    let mounted = true;
    let timer: ReturnType<typeof setTimeout>;

    function cycle(assemble: boolean, delay: number) {
      timer = setTimeout(() => {
        if (!mounted) return;
        setIsAssembled(assemble);
        cycle(!assemble, assemble ? 4200 : 1500);
      }, delay);
    }

    cycle(true, 500);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [shouldReduceMotion]);

  const state = isAssembled ? "assembled" : "scattered";

  return (
    <svg
      viewBox="0 0 400 280"
      className="h-full w-full"
      role="img"
      aria-label="Ilustração de um notebook sendo montado peça por peça"
    >
      {/* base / teclado */}
      <motion.g
        variants={partVariants({ x: 90, y: 130, rotate: 12 }, 0.08)}
        animate={state}
        initial="scattered"
      >
        <rect x="45" y="196" width="310" height="30" rx="9" fill="#071A33" />
        <rect x="70" y="204" width="260" height="4" rx="2" fill="#0057FF" opacity="0.35" />
        <circle cx="200" cy="216" r="1.6" fill="#0057FF" opacity="0.6" />
      </motion.g>

      {/* tela / lid */}
      <motion.g
        variants={partVariants({ x: -80, y: -130, rotate: -14 }, 0)}
        animate={state}
        initial="scattered"
      >
        <rect x="75" y="14" width="250" height="168" rx="14" fill="#071A33" />
        <motion.rect
          x="91"
          y="30"
          width="218"
          height="136"
          rx="6"
          initial={false}
          animate={{ fill: isAssembled ? "#FFFFFF" : "#0B1120" }}
          transition={{ duration: 0.5, delay: isAssembled ? 0.45 : 0 }}
        />
        {isAssembled ? (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.75 }}
          >
            <image
              href="/images/logo-capucho.png"
              x="146"
              y="80"
              width="108"
              height="31"
              preserveAspectRatio="xMidYMid meet"
            />
          </motion.g>
        ) : null}
      </motion.g>

      {/* pente de memória RAM */}
      <motion.g
        variants={partVariants({ x: -150, y: 60, rotate: -35 }, 0.22)}
        animate={state}
        initial="scattered"
      >
        <g transform="translate(140 190)">
          <rect x="0" y="0" width="56" height="12" rx="2" fill="#0057FF" />
          <rect x="4" y="10" width="4" height="4" fill="#071A33" />
          <rect x="14" y="10" width="4" height="4" fill="#071A33" />
          <rect x="24" y="10" width="4" height="4" fill="#071A33" />
          <rect x="34" y="10" width="4" height="4" fill="#071A33" />
          <rect x="44" y="10" width="4" height="4" fill="#071A33" />
        </g>
      </motion.g>

      {/* SSD */}
      <motion.g
        variants={partVariants({ x: 160, y: -40, rotate: 28 }, 0.3)}
        animate={state}
        initial="scattered"
      >
        <g transform="translate(232 186)">
          <rect x="0" y="0" width="42" height="26" rx="3" fill="#0057FF" opacity="0.85" />
          <rect x="6" y="7" width="30" height="3" rx="1.5" fill="#071A33" opacity="0.5" />
          <rect x="6" y="14" width="18" height="3" rx="1.5" fill="#071A33" opacity="0.5" />
        </g>
      </motion.g>
    </svg>
  );
}
