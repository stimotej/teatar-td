import { getShow, getShows } from "@/lib/data/events";
import Embeds from "@/lib/scripts/embeds";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import DisplayHTML from "@/modules/common/components/display-html";
import { titleClassName } from "@/modules/common/components/page-title";
import { Separator } from "@/modules/common/components/separator";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const shows = await getShows();

  return shows.map((show) => ({
    slug: show.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const show = await getShow(slug);

  if (!show) notFound();

  const title = clearHtmlFromString(show.title.rendered);
  const description = clearHtmlFromString(show.excerpt.rendered);

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      siteName: "Teatar &TD",
      images: [
        {
          alt: title,
          url: show.image_url,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [
        {
          alt: title,
          url: show.image_url,
        },
      ],
    },
  };
}

export default async function ShowPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const show = await getShow(slug);

  if (!show) notFound();

  return (
    <>
      <Separator />
      <div className="py-24 max-w-4xl mx-auto">
        <DisplayHTML
          as="h1"
          html={clearHtmlFromString(show.title.rendered)}
          className={titleClassName}
        />
        <DisplayHTML html={show.content.rendered} className="mt-12" />
      </div>
      <Separator />
      <Embeds />
    </>
  );
}
