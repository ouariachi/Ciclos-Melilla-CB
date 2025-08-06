"use server";

import BackgroundBlobs from "@/components/BackgroundBlobs";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import Services from "@/components/home/Services";
import Schedule from "@/components/home/Schedule";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

export default async function HomePage() {
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
