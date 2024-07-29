import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Steps />
      <Pricing />
      <CTASection />
      <FAQ />
    </main>
  );
}
