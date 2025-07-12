import { Separator } from "@/modules/common/components/separator";
import AboutUs from "@/modules/home/about/about-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kazalište",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-6 md:p-8 lg:p-12">
      <Separator />
      <div className="max-w-6xl mx-auto py-24">
        <AboutUs />
      </div>
      <Separator />
    </main>
  );
}
