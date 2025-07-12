import { Separator } from "@/modules/common/components/separator";
import CurrentShows from "@/modules/shows/current-shows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predstave",
};

export default async function Shows({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const queryParams = await searchParams;

  const page = queryParams.page
    ? Array.isArray(queryParams.page)
      ? Number(queryParams.page[0])
      : Number(queryParams.page)
    : 1;

  return (
    <main className="min-h-screen p-6 md:p-8 lg:p-12">
      <Separator />
      <CurrentShows page={page} />
      <Separator />
    </main>
  );
}
