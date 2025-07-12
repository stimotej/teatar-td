import { getContent } from "@/lib/data/content";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import DisplayHTML from "@/modules/common/components/display-html";
import { titleClassName } from "@/modules/common/components/page-title";
import { Separator } from "@/modules/common/components/separator";
import ContactList from "@/modules/home/contact/contact-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulaznice",
};

export default async function Tickets() {
  const { prodajaUlaznica } = await getContent();

  return (
    <main className="min-h-screen p-6 md:p-8 lg:p-12">
      <Separator />

      <div className="max-w-6xl mx-auto py-24">
        {!!prodajaUlaznica && (
          <>
            <DisplayHTML
              as="h1"
              html={clearHtmlFromString(prodajaUlaznica.title.rendered)}
              className={titleClassName}
            />

            <DisplayHTML
              html={prodajaUlaznica.meta.sadrzaj}
              className="mt-12 sm:text-lg md:text-xl"
            />
            <DisplayHTML
              html={prodajaUlaznica.content.rendered}
              className="my-12 sm:text-lg md:text-xl"
            />
          </>
        )}
        <h3 className="uppercase text-lg sm:text-xl md:text-2xl font-semibold">
          Kontakt
        </h3>
        <ContactList className="mt-6" />
      </div>
      <Separator />
    </main>
  );
}
