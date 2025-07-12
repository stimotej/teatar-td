import ArchiveItem from "@/modules/archives/archive-item";
import { Separator } from "@/modules/common/components/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arhiva",
};

export default async function Archives() {
  return (
    <main className="min-h-screen p-6 md:p-8 lg:p-12">
      <Separator />
      <div className="max-w-6xl mx-auto py-24 space-y-12">
        {[2024, 2023, 2022, 2021, 2020].map((year) => (
          <ArchiveItem key={year} year={year} />
        ))}
      </div>
      <Separator />
    </main>
  );
}
