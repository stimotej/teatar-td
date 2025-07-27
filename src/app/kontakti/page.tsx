import { Separator } from "@/modules/common/components/separator";
import Location from "@/modules/home/about/location";
import ContactList from "@/modules/home/contact/contact-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakti",
};

export default function Tickets() {
  return (
    <>
      <Separator />
      <div className="max-w-6xl mx-auto py-24 flex flex-col lg:items-center lg:flex-row gap-12">
        <Location iframeLoading="eager" />
        <ContactList />
      </div>
      <Separator />
    </>
  );
}
