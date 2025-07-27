import type { Post } from "@/models/post";
import fetchApi from "../utils/api";
import {
  revalidateTime,
  teatarTdONamaPost,
  teatarTdProdajaUlaznicaPost,
} from "@/lib/utils/constants";

export async function getContent() {
  const params = {
    include: [teatarTdONamaPost, teatarTdProdajaUlaznicaPost].toString(),
    per_page: "2",
  };

  const queryParams = new URLSearchParams(params).toString();

  const posts = await fetchApi<Post[]>(`/posts?${queryParams}`, {
    next: {
      revalidate: revalidateTime,
      tags: ["content"],
    },
    cache: "force-cache",
  });

  const oNama = posts.find((post) => post.id === teatarTdONamaPost);
  const prodajaUlaznica = posts.find(
    (post) => post.id === teatarTdProdajaUlaznicaPost
  );

  return {
    oNama,
    prodajaUlaznica,
  };
}
