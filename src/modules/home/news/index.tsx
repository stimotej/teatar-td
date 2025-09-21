import { getPosts } from "@/lib/data/posts";
import PageTitle from "@/modules/common/components/page-title";
import Post from "@/modules/common/components/post";
import { Separator } from "@/modules/common/components/separator";

export default async function News() {
  const posts = await getPosts({ limit: 6 });

  if (posts.length <= 0) return null;
  return (
    <>
      <Separator />
      <section className="max-w-6xl mx-auto py-12">
        <PageTitle>Vijesti</PageTitle>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {posts.map((post, index) => (
            <Post
              key={index}
              title={post.title.rendered}
              description={post.excerpt.rendered}
              image={post.image_url}
              slug={`/vijesti/${post.slug}`}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
