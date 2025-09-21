import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/modules/common/components/collapsible";
import { titleClassName } from "@/modules/common/components/page-title";
import PlusIcon from "@/modules/common/icons/plus";
import MinusIcon from "@/modules/common/icons/minus";
import { getShows } from "@/lib/data/events";
import { formatTitleAndSubtitle } from "@/lib/utils/format-title-and-subtitle";
import Post from "@/modules/common/components/post";
import { cn } from "@/lib/utils/cn";

export default async function ArchiveItem({ year }: { year: number }) {
  const { shows } = await getShows({ year });

  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full flex items-center justify-between gap-2 px-8 py-3 border-3 border-(--primary) rounded-full data-[state=open]:[&>.plus]:hidden data-[state=closed]:[&>.minus]:hidden">
        <h2 className={cn(titleClassName, "text-xl")}>
          ARHIVA PREDSTAVA {year === 2020 ? "DO" : "OD"} {year}.
        </h2>
        <PlusIcon className="size-12 stroke-3 text-(--primary) plus" />
        <MinusIcon className="size-12 stroke-3 text-(--primary) minus" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4">
        {year === 2020 ? (
          <iframe
            src="https://view.officeapps.live.com/op/embed.aspx?src=https://www.sczg.unizg.hr/wp-content/uploads/2025/07/ARHIVA.docx"
            className="w-full h-screen"
          />
        ) : shows.length > 0 ? (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {shows.map((show) => {
              const { title, subtitle } = formatTitleAndSubtitle(
                show.title.rendered
              );
              return (
                <Post
                  key={show.id}
                  title={title}
                  subtitle={subtitle}
                  image={show.image_url}
                  slug={`/predstave/${show.slug}`}
                />
              );
            })}
          </ul>
        ) : (
          <p className="text-center py-12 text-lg">Nema sadržaja za prikaz</p>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
