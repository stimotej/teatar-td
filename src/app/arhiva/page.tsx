import { getArchives } from "@/lib/data/archives";
import ArchiveItem from "@/modules/archives/archive-item";
import { Separator } from "@/modules/common/components/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arhiva",
};

export default async function Archives() {
  const archives = await getArchives();

  return (
    <>
      <Separator />
      <div className="max-w-6xl mx-auto py-24 space-y-12">
        {archives.map((archive) => (
          <ArchiveItem key={archive.id} archive={archive} />
        ))}
      </div>
      <Separator />
    </>
  );
}
