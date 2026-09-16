import { Clock, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildWhatsAppUrl, defaultWhatsAppMessage, siteConfig } from "@/lib/site-config";

export function Location() {
  return (
    <section id="contato" className="bg-tech-gray py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Localização e contato"
          title="Fale com a gente ou venha até a loja"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-deep-blue/[0.06]">
              <iframe
                title="Localização da Capucho Informática no Google Maps"
                src={siteConfig.google.mapsEmbedSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-4 rounded-2xl border border-deep-blue/[0.06] bg-white p-7 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-electric-blue" />
                <div>
                  <p className="text-sm font-semibold text-deep-blue">Endereço</p>
                  <p className="mt-1 text-sm text-foreground/60">{siteConfig.address.full}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-electric-blue" />
                <div>
                  <p className="text-sm font-semibold text-deep-blue">Horário</p>
                  <div className="mt-1 space-y-0.5 text-sm text-foreground/60">
                    {siteConfig.hours.map((item) => (
                      <p key={item.days}>
                        {item.days}: {item.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3"
              >
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-electric-blue" />
                <div>
                  <p className="text-sm font-semibold text-deep-blue">WhatsApp</p>
                  <p className="mt-1 text-sm text-foreground/60">{siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3"
              >
                <InstagramIcon size={18} className="mt-0.5 shrink-0 text-electric-blue" />
                <div>
                  <p className="text-sm font-semibold text-deep-blue">Instagram</p>
                  <p className="mt-1 text-sm text-foreground/60">{siteConfig.instagramHandle}</p>
                </div>
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
