import type { Metadata } from "next";
import { Cpu, Gamepad2, MessageCircle, MonitorCog, Settings2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Área Gamer | Montagem de PC Gamer sob medida",
  description:
    "Montagem de PC Gamer personalizada em São Paulo. Configurações sob medida para jogos, streaming e produtividade, com acompanhamento técnico completo.",
  alternates: { canonical: "/gamer" },
};

const differentials = [
  {
    icon: Cpu,
    title: "Componentes selecionados",
    description: "Escolha de peças compatíveis e balanceadas para o seu orçamento.",
  },
  {
    icon: Settings2,
    title: "Configuração sob medida",
    description: "Builds pensadas para jogos, streaming, edição ou produtividade.",
  },
  {
    icon: Sparkles,
    title: "Acabamento premium",
    description: "Montagem caprichada, com organização de cabos e ventilação otimizada.",
  },
];

const gamerMessage =
  "Olá, Capucho Informática! Tenho interesse em montar um PC Gamer e gostaria de uma consultoria personalizada.";

export default function GamerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep-blue py-24 text-white sm:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-electric-blue/15 blur-[120px]"
          aria-hidden
        />
        <div className="container-page relative flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-blue">
            Área Gamer
          </span>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Sua build gamer, montada sob medida
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            Montagem de PC Gamer com consultoria técnica personalizada, do
            planejamento à entrega.
          </p>
          <div className="mt-9">
            <Button href={buildWhatsAppUrl(gamerMessage)} external icon={<MessageCircle size={18} />}>
              Conversar com um especialista
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Diferenciais"
            title="Por que montar seu PC Gamer com a Capucho?"
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-deep-blue/[0.06] bg-white p-7 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/10 text-electric-blue">
                  <item.icon size={22} />
                </div>
                <h2 className="mt-5 text-base font-semibold text-deep-blue">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tech-gray py-24 sm:py-28">
        <div className="container-page">
          <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-dashed border-deep-blue/15 bg-white p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-blue/10 text-electric-blue">
              <MonitorCog size={26} />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-deep-blue">
              Configurador de PC Gamer
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/60">
              Em breve você poderá montar sua configuração ideal diretamente pelo
              site, com finalização e conferência via WhatsApp. Por enquanto, fale
              com a gente para uma consultoria personalizada.
            </p>
            <div className="mt-7">
              <Button href={buildWhatsAppUrl(gamerMessage)} external icon={<Gamepad2 size={18} />}>
                Montar meu PC com um especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-page flex flex-col items-center text-center">
          <h2 className="max-w-xl text-balance text-2xl font-semibold text-deep-blue sm:text-3xl">
            Nota {siteConfig.google.rating.toFixed(1)} no Google com {siteConfig.google.reviewCount}{" "}
            avaliações
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/60">
            Confiança de quem já teve seu equipamento cuidado pela Capucho Informática.
          </p>
        </div>
      </section>
    </>
  );
}
