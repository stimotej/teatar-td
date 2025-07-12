import { titleClassName } from "@/modules/common/components/page-title";
import ChevronRightIcon from "@/modules/common/icons/chevron-right";
import Image from "next/image";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import DisplayHTML from "@/modules/common/components/display-html";
import { getContent } from "@/lib/data/content";

export default async function AboutUs({
  titleLevel = "h1",
}: {
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  const { oNama } = await getContent();

  if (!oNama) return null;

  return (
    <>
      <DisplayHTML
        as={titleLevel}
        html={clearHtmlFromString(oNama.title.rendered)}
        className={titleClassName}
      />
      <div className="flex gap-6 flex-col lg:items-center lg:flex-row mt-12">
        <div className="flex gap-2 items-start">
          <ChevronRightIcon className="size-10 text-(--primary) shrink-0 stroke-3 hidden lg:block" />
          <DisplayHTML
            html={oNama.meta.sadrzaj}
            className="sm:text-lg md:text-xl"
          />
        </div>
        <Image
          src={oNama.image_url}
          alt="Teatar&TD"
          width={460}
          height={260}
          className="w-[460px] h-auto rounded-lg object-cover mx-auto"
        />
      </div>
      <div className="flex gap-2 items-start mt-4">
        <ChevronRightIcon className="size-10 text-(--primary) shrink-0 stroke-3 hidden lg:block" />
        <DisplayHTML
          html={oNama.content.rendered}
          className="sm:text-lg md:text-xl"
        />
      </div>
    </>
  );
}
