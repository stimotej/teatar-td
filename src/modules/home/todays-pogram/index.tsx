import Post from "@/modules/common/components/post";
import { getShowEvents } from "@/lib/data/events";
import PageTitle from "@/modules/common/components/page-title";
import LinkButton from "@/modules/common/components/link-button";
import { formatTitleAndSubtitle } from "@/lib/utils/format-title-and-subtitle";
import { Separator } from "@/modules/common/components/separator";
import { formatDate } from "@/lib/utils/formatDate";

export default async function TodaysProgram() {
  const { showEvents } = await getShowEvents({ perPage: 3 });

  if (showEvents.length <= 0) return null;
  return (
    <>
      <Separator />
      <section className="max-w-6xl mx-auto py-12">
        <PageTitle>Na programu</PageTitle>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {showEvents.map(({ show, date }) => {
            const { title, subtitle } = formatTitleAndSubtitle(
              show.title.rendered
            );
            return (
              <Post
                key={show.id}
                title={title}
                subtitle={subtitle}
                date={formatDate(date)}
                image={show.image_url}
                slug={`/predstave/${show.slug}`}
              />
            );
          })}
        </ul>
        <LinkButton
          href="https://www.ulaznice.hr/web/regular/18333798"
          target="_blank"
          rel="noreferrer noopener"
          size="lg"
          className="mx-auto mt-18"
        >
          Kupi ulaznice
        </LinkButton>
      </section>
    </>
  );
}
