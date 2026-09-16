import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { services } from "@/lib/services";
import { buildWhatsAppUrl, defaultWhatsAppMessage, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-deep-blue text-white/70">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo-capucho.png"
            alt={siteConfig.name}
            width={392}
            height={112}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Assistência técnica especializada em notebooks, desktops e PC Gamer, com
            padrão de atendimento de uma marca de tecnologia premium.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Serviços</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="text-sm text-white/50 transition-colors hover:text-electric-blue"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Empresa</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/50">
            <li>
              <Link href="/#sobre" className="transition-colors hover:text-electric-blue">
                Sobre a Capucho
              </Link>
            </li>
            <li>
              <Link href="/gamer" className="transition-colors hover:text-electric-blue">
                Área Gamer
              </Link>
            </li>
            <li>
              <Link href="/#depoimentos" className="transition-colors hover:text-electric-blue">
                Depoimentos
              </Link>
            </li>
            <li>
              <Link href="/#contato" className="transition-colors hover:text-electric-blue">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/50">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-electric-blue" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-electric-blue" />
              <span>
                {siteConfig.hours.map((h) => `${h.days}: ${h.time}`).join(" • ")}
              </span>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-electric-blue"
              >
                <MessageCircle size={16} className="shrink-0 text-electric-blue" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-electric-blue"
              >
                <InstagramIcon size={16} className="shrink-0 text-electric-blue" />
                {siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-page text-center text-xs text-white/40">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
