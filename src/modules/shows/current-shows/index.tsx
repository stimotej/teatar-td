import { getUpcomingShows } from "@/lib/data/events";
import { formatTitleAndSubtitle } from "@/lib/utils/format-title-and-subtitle";
import PageTitle from "@/modules/common/components/page-title";
import Post from "@/modules/common/components/post";
import PostPagination from "@/modules/common/components/post-pagination";

export default async function ShowList({ page }: { page: number }) {
  const { shows, totalPages } = await getUpcomingShows({ page, perPage: 24 });

  return (
    <section className="max-w-6xl mx-auto py-24">
      <PageTitle>Aktualne predstave</PageTitle>
      {shows.length <= 0 ? (
        <p className="my-24 text-neutral-600 text-center">
          Nema sadržaja za prikaz.
        </p>
      ) : (
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
      )}
      <PostPagination className="mt-24" page={page} totalPages={totalPages} />
    </section>
  );
}
