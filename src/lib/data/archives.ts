import type { Post } from "@/models/post";
import fetchApi from "../utils/api";
import {
  revalidateTime,
  teatarTdArchiveCategoryId,
} from "@/lib/utils/constants";
import { getShows } from "./events";

export function getArchives() {
  const params = {
    categories: teatarTdArchiveCategoryId.toString(),
    per_page: "999",
    orderby: "date",
    order: "desc",
  };

  const queryParams = new URLSearchParams(params).toString();

  return fetchApi<Post[]>(`/posts?${queryParams}`, {
    next: {
      revalidate: revalidateTime,
      tags: ["archives"],
    },
    cache: "force-cache",
  });
}

export async function getArchiveEvents(archiveId: number) {
  const { shows } = await getShows();

  return shows.filter((show) => show.meta.archive_id === archiveId);
}
