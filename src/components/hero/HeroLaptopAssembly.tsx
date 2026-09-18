"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Efeito do Hero: duas fotos reais do notebook (desmontado / montado, fundo
 * transparente, logo Capucho já aplicada) — a desmontada se "comprime" via
 * transform (scale/scaleY/rotateX/clip-path) até coincidir com a montada,
 * amarrado ao scroll via GSAP ScrollTrigger. Não são peças separadas: o
 * efeito de montagem é simulado nas duas imagens inteiras.
 */

interface HeroLaptopAssemblyProps {
  className?: string;
}

export function HeroLaptopAssembly({ className }: HeroLaptopAssemblyProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const explodedRef = useRef<HTMLImageElement | null>(null);
  const assembledRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const exploded = explodedRef.current;
    const assembled = assembledRef.current;
    if (!root || !exploded || !assembled) return;
    const pinTarget = root.closest("section") ?? root;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduced: "(prefers-reduced-motion: reduce)",
          desktop: "(min-width: 1024px)",
          tablet: "(min-width: 640px) and (max-width: 1023px)",
        },
        (context) => {
          const { reduced, desktop, tablet } = context.conditions as {
            reduced: boolean;
            desktop: boolean;
            tablet: boolean;
          };

          gsap.set(exploded, {
            transformOrigin: "50% 55%",
            opacity: 1,
            scale: 1,
            scaleY: 1,
            y: "0%",
            rotateX: 0,
            clipPath: "inset(0% 0% 0% 0%)",
          });
          gsap.set(assembled, {
            transformOrigin: "50% 55%",
            opacity: 0,
            scale: 0.94,
            y: "1%",
            rotateX: -4,
            clipPath: "inset(6% 6% 6% 6%)",
          });

          if (reduced) {
            gsap.set(exploded, { opacity: 0 });
            gsap.set(assembled, {
              opacity: 1,
              scale: 1,
              y: "0%",
              rotateX: 0,
              clipPath: "inset(0% 0% 0% 0%)",
            });
            return;
          }

          // Tablet/mobile: mesmo roteiro, com menos distância de scroll e
          // transforms 3D mais discretos (perspective/rotateX pesam menos
          // em telas pequenas e em aparelhos mais fracos).
          const scrollDistance = desktop ? 600 : tablet ? 480 : 380;
          const depth = desktop ? 1 : tablet ? 0.6 : 0.4;
          const scrubValue = desktop ? 0.7 : 1;

          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut", duration: 0.2 },
            scrollTrigger: {
              trigger: pinTarget,
              start: "top top+=72",
              end: `+=${scrollDistance}`,
              scrub: scrubValue,
              pin: pinTarget,
              pinSpacing: true,
              anticipatePin: 1,
            },
          });

          tl.to(exploded, { scale: 0.97, scaleY: 0.92, y: "-1%", rotateX: 3 * depth }, 0)
            .to(exploded, { scale: 0.9, scaleY: 0.8, y: "-3%", rotateX: 8 * depth }, 0.2)
            .to(
              exploded,
              {
                scale: 0.8,
                scaleY: 0.66,
                y: "-5%",
                rotateX: 14 * depth,
                opacity: 0.55,
                clipPath: "inset(0% 0% 14% 0%)",
              },
              0.4
            )
            .to(
              assembled,
              { opacity: 0.5, scale: 0.96, y: "0.6%", rotateX: -2 * depth, clipPath: "inset(3% 3% 3% 3%)" },
              0.4
            )
            .to(
              exploded,
              { scale: 0.72, scaleY: 0.58, y: "-7%", rotateX: 18 * depth, opacity: 0.12 },
              0.6
            )
            .to(
              assembled,
              { opacity: 0.9, scale: 0.99, y: "0.2%", rotateX: -1 * depth, clipPath: "inset(1% 1% 1% 1%)" },
              0.6
            )
            .to(exploded, { opacity: 0 }, 0.8)
            .to(
              assembled,
              { opacity: 1, scale: 1, y: "0%", rotateX: 0, clipPath: "inset(0% 0% 0% 0%)" },
              0.8
            );
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className={className}
      style={{ position: "relative", perspective: "1200px", transformStyle: "preserve-3d", overflow: "visible" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={explodedRef}
        src="/images/notebook-desmontado.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          willChange: "transform, opacity",
        }}
        draggable={false}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={assembledRef}
        src="/images/notebook-montado.png"
        alt="Notebook Capucho Informática"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          willChange: "transform, opacity",
        }}
        draggable={false}
      />
    </div>
  );
}
