import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/modules/common/components/collapsible";
import { titleClassName } from "@/modules/common/components/page-title";
import PlusIcon from "@/modules/common/icons/plus";
import MinusIcon from "@/modules/common/icons/minus";
import { formatTitleAndSubtitle } from "@/lib/utils/format-title-and-subtitle";
import Post from "@/modules/common/components/post";
import { cn } from "@/lib/utils/cn";
import type { Post as PostType } from "@/models/post";
import { getArchiveEvents } from "@/lib/data/archives";
import DisplayHTML from "../common/components/display-html";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";

export default async function ArchiveItem({ archive }: { archive: PostType }) {
  let shows: PostType[] = [];

  if (archive.meta.link) {
    shows = await getArchiveEvents(archive.id);
  }

  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full flex items-center justify-between gap-2 px-8 py-3 border-3 border-(--primary) rounded-full data-[state=open]:[&>.plus]:hidden data-[state=closed]:[&>.minus]:hidden">
        <DisplayHTML
          as="h2"
          className={cn(titleClassName, "text-xl")}
          html={clearHtmlFromString(archive.title.rendered)}
        />
        <PlusIcon className="size-12 stroke-3 text-(--primary) plus" />
        <MinusIcon className="size-12 stroke-3 text-(--primary) minus" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4">
        {archive.meta.link ? (
          <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${archive.meta.link}`}
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
          <p className="text-center py-12 text-lg text-neutral-600">
            Nema sadržaja za prikaz
          </p>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
