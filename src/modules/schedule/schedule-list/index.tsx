import { getShowEvents } from "@/lib/data/events";
import { formatTitleAndSubtitle } from "@/lib/utils/format-title-and-subtitle";
import Post from "@/modules/common/components/post";
import PostPagination from "@/modules/common/components/post-pagination";

export default async function ScheduleList({ page }: { page: number }) {
  const { showEvents, totalPages } = await getShowEvents({
    page,
  });

  return (
    <div className="max-w-6xl mx-auto py-24">
      <ul className="grid gap-8">
        {showEvents.map((showEvent) => {
          const { title, subtitle } = formatTitleAndSubtitle(
            showEvent.show.title.rendered
          );
          return (
            <Post
              key={`${showEvent.date}-${showEvent.show.id}`}
              orientation="horizontal"
              title={title}
              subtitle={subtitle}
              date={new Date(showEvent.date).toLocaleDateString("hr-HR", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
              image={showEvent.show.image_url}
              slug={`/predstave/${showEvent.show.slug}`}
            />
          );
        })}
      </ul>
      <PostPagination className="mt-24" page={page} totalPages={totalPages} />
    </div>
  );
}
