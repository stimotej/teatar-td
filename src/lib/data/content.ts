import type { Post } from "@/models/post";
import fetchApi from "../utils/api";
import {
  revalidateTime,
  teatarTdKontaktiPost,
  teatarTdONamaPost,
  teatarTdProdajaUlaznicaPost,
} from "@/lib/utils/constants";

export async function getContent() {
  const params = {
    include: [
      teatarTdONamaPost,
      teatarTdProdajaUlaznicaPost,
      teatarTdKontaktiPost,
    ].toString(),
    per_page: "3",
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
    (post) => post.id === teatarTdProdajaUlaznicaPost,
  );
  const kontakti = posts.find((post) => post.id === teatarTdKontaktiPost);

  return {
    oNama,
    prodajaUlaznica,
    kontakti,
  };
}
