import { getContent } from "@/lib/data/content";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import { Separator } from "@/modules/common/components/separator";
import Location from "@/modules/home/about/location";
import ContactList from "@/modules/home/contact/contact-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakti",
};

export default async function Contacts() {
  const { kontakti } = await getContent();

  return (
    <>
      <Separator />
      <div className="max-w-6xl mx-auto py-24 flex flex-col lg:items-center lg:flex-row gap-12">
        <Location
          iframeLoading="eager"
          title={
            kontakti?.title.rendered
              ? clearHtmlFromString(kontakti.title.rendered)
              : undefined
          }
          excerpt={
            kontakti?.meta.sadrzaj
              ? clearHtmlFromString(kontakti.meta.sadrzaj)
              : undefined
          }
        />
        <ContactList />
      </div>
      <Separator />
    </>
  );
}
