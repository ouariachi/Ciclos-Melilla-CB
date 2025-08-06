// app/page.tsx
import "@/global.css";
import Hero from "@/components/home/Hero";
import Contact from "@/components/home/Contact";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import Schedule from "@/components/home/Schedule";
import WhoWeAre from "@/components/home/WhoWeAre";
import Services from "@/components/home/Services";
import BackgroundBlobs from "@/components/BackgroundBlobs";

export default function HomePage() {
  return (
    <main>
      <BackgroundBlobs />
      <Hero />
      <WhoWeAre />
      <Services />
      <Schedule />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}
