import { Separator } from "@/modules/common/components/separator";
import About from "@/modules/home/about";
import Contact from "@/modules/home/contact";
import News from "@/modules/home/news";
import PostSlider from "@/modules/home/post-slider";
import HeroSlide from "@/modules/home/today-program";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Studentski Centar u Zagrebu - Teatar &TD",
};

export default async function Home() {
  return (
    <main className="min-h-screen p-6 md:p-8 lg:p-12">
      <HeroSlide />
      <Separator />
      <PostSlider />
      <Separator />
      <News />
      <Separator />
      <About />
      <Separator />
      <Contact />
      <Separator />
    </main>
  );
}
