import { Separator } from "@/modules/common/components/separator";
import About from "@/modules/home/about";
import Contact from "@/modules/home/contact";
import News from "@/modules/home/news";
import HeroSlider from "@/modules/home/hero-slider";
import type { Metadata } from "next";
import TodaysProgram from "@/modules/home/todays-pogram";

export const metadata: Metadata = {
  description: "Studentski Centar u Zagrebu - Teatar &TD",
};

export default async function Home() {
  return (
    <>
      <HeroSlider />
      <TodaysProgram />
      <News />
      <Separator />
      <About />
      <Separator />
      <Contact />
      <Separator />
    </>
  );
}
