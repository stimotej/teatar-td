import Location from "./location";
import AboutUs from "./about-us";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import DisplayHTML from "@/modules/common/components/display-html";
import { getContent } from "@/lib/data/content";

export default async function About() {
  const { prodajaUlaznica } = await getContent();

  return (
    <section className="max-w-6xl mx-auto py-12">
      <AboutUs titleLevel="h2" />
      <div className="mt-12 flex gap-12 flex-col lg:flex-row">
        <Location />
        {!!prodajaUlaznica && (
          <div>
            <DisplayHTML
              as="h3"
              html={clearHtmlFromString(prodajaUlaznica.title.rendered)}
              className="uppercase text-lg sm:text-xl md:text-2xl font-semibold"
            />
            <DisplayHTML
              html={prodajaUlaznica.meta.sadrzaj}
              className="mt-6 sm:text-lg md:text-xl"
            />
          </div>
        )}
      </div>
      {!!prodajaUlaznica && (
        <DisplayHTML
          html={prodajaUlaznica.content.rendered}
          className="mt-12 sm:text-lg md:text-xl"
        />
      )}
    </section>
  );
}
