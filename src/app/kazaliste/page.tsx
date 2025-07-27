import { Separator } from "@/modules/common/components/separator";
import AboutUs from "@/modules/home/about/about-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kazalište",
};

export default function AboutPage() {
  return (
    <>
      <Separator />
      <div className="max-w-6xl mx-auto py-24">
        <AboutUs />
      </div>
      <Separator />
    </>
  );
}
