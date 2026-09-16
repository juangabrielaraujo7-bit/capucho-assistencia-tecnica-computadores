import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { GamerSection } from "@/components/sections/GamerSection";
import { About } from "@/components/sections/About";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <GamerSection />
      <About />
      <Location />
      <FinalCta />
    </>
  );
}
