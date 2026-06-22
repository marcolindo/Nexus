import HeroSection from "@/components/HeroSection";
import ParceriaSection from "@/components/ParceriaSection";
import CartoesSection from "@/components/CartoesSection";
import VitaliciaSection from "@/components/VitaliciaSection";
import ContaSection from "@/components/ContaSection";
import AppSection from "@/components/AppSection";
import MundoMelhorSection from "@/components/MundoMelhorSection";
import FaqSection from "@/components/FaqSection";
import OQueVemSection from "@/components/OQueVemSection";
import TvOrgulhoSection from "@/components/TvOrgulhoSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ParceriaSection />
      <CartoesSection />
      <VitaliciaSection />
      <ContaSection />
      <AppSection />
      <MundoMelhorSection />
      <FaqSection />
      <OQueVemSection />
      <TvOrgulhoSection />
      <FooterSection />
    </main>
  );
}
