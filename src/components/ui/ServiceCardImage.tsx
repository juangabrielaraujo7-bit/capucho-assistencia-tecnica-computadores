import Image from "next/image";
import clsx from "clsx";
import type { ServiceImage } from "@/lib/services";

interface ServiceCardImageProps {
  image: ServiceImage;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function ServiceCardImage({ image, alt, sizes, priority, className }: ServiceCardImageProps) {
  const defaultSizes = sizes ?? "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw";

  if (image.fit === "contain") {
    return (
      <div
        className={clsx(
          "relative aspect-[4/3] overflow-hidden bg-[radial-gradient(ellipse_at_center,_#eef3ff_0%,_#f4f6f8_65%,_#eceff4_100%)]",
          className
        )}
      >
        <div
          className="absolute bottom-[12%] left-1/2 h-[14%] w-[55%] -translate-x-1/2 rounded-full bg-deep-blue/15 blur-lg"
          aria-hidden
        />
        <Image
          src={image.src}
          alt={alt}
          fill
          sizes={defaultSizes}
          priority={priority}
          className="object-contain p-6 drop-shadow-[0_18px_20px_rgba(7,26,51,0.18)]"
        />
      </div>
    );
  }

  return (
    <div className={clsx("relative aspect-[4/3] overflow-hidden bg-tech-gray", className)}>
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={defaultSizes}
        priority={priority}
        style={{ objectPosition: image.position ?? "50% 50%" }}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}
