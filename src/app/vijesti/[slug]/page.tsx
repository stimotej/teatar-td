import { getPost, getPosts } from "@/lib/data/posts";
import Embeds from "@/lib/scripts/embeds";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import DisplayHTML from "@/modules/common/components/display-html";
import { titleClassName } from "@/modules/common/components/page-title";
import { Separator } from "@/modules/common/components/separator";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const title = clearHtmlFromString(post.title.rendered);
  const description = clearHtmlFromString(post.excerpt.rendered);

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
          url: post.image_url,
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
          url: post.image_url,
        },
      ],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      <Separator />
      <div className="py-24 max-w-4xl mx-auto">
        <DisplayHTML
          as="h1"
          html={clearHtmlFromString(post.title.rendered)}
          className={titleClassName}
        />
        <DisplayHTML html={post.content.rendered} className="mt-12" />
      </div>
      <Separator />
      <Embeds />
    </>
  );
}
