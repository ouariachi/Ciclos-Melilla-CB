"use server";

import BackgroundBlobs from "@/components/BackgroundBlobs";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import Services from "@/components/home/Services";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import { ScheduleServer } from "@/components/home/ScheduleServer";

export default async function HomePage() {
  return (
    <main>
      <BackgroundBlobs />
      <Hero />
      <WhoWeAre />
      <Services />
      <ScheduleServer />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}
