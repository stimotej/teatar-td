import type { Post } from "@/models/post";
import fetchApi from "../utils/api";
import { revalidateTime, teatarTdCategoryId } from "@/lib/utils/constants";

export function getPosts(props?: { limit?: number }) {
  const params = {
    categories: teatarTdCategoryId.toString(),
    per_page: props?.limit ? props.limit.toString() : "9999",
    filter_by_date: "true",
    orderby: "date",
    order: "desc",
  };

  const queryParams = new URLSearchParams(params).toString();

  return fetchApi<Post[]>(`/obavijesti?${queryParams}`, {
    next: {
      revalidate: revalidateTime,
      tags: ["posts"],
    },
    cache: "force-cache",
  });
}

export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
}
