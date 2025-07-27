import { Separator } from "@/modules/common/components/separator";
import ScheduleList from "@/modules/schedule/schedule-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raspored",
};

export default async function Schedule({
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
    <>
      <Separator />
      <ScheduleList page={page} />
      <Separator />
    </>
  );
}
