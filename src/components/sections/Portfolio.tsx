import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioVideoCard } from "@/components/sections/PortfolioVideoCard";
import { portfolioVideos } from "@/lib/portfolio";

export function Portfolio() {
  return (
    <section id="realizados" className="py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfólio"
          title="Serviços realizados"
          description="Vídeos reais de equipamentos que já passaram pela nossa bancada."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:gap-5 lg:max-w-none lg:grid-cols-4">
          {portfolioVideos.map((video, index) => (
            <PortfolioVideoCard key={video.slug} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
