import fetchApi from "@/lib/utils/api";
import type { Post } from "@/models/post";
import { revalidateTime } from "../utils/constants";

export async function getShows() {
  const params: Record<string, string> = {
    location: "Teatar &TD",
    per_page: "9999",
    orderby: "date",
    order: "desc",
  };

  const queryParams = new URLSearchParams(params).toString();

  const posts = await fetchApi<Post[]>(`/event?${queryParams}`, {
    next: {
      revalidate: revalidateTime,
      tags: ["events"],
    },
    cache: "force-cache",
  });

  return posts;
}

export async function getDisplayShows(props?: {
  page?: number;
  perPage?: number;
}) {
  const posts = await getShows();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filteredPosts = posts.filter(
    (post) =>
      !!post.meta.end_showing &&
      (post.meta.end_showing === "never" ||
        new Date(post.meta.end_showing) >= today)
  );

  if (typeof props?.perPage !== "undefined") {
    const { page = 1, perPage = 20 } = props;

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return {
      shows: filteredPosts.slice(startIndex, endIndex),
      totalPages: Math.ceil(filteredPosts.length / perPage),
    };
  } else {
    return {
      shows: filteredPosts,
      totalPages: 1,
    };
  }
}

export async function getUpcomingShows(props?: {
  page?: number;
  perPage?: number;
}) {
  const posts = await getShows();

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const shows = posts
    .map((post) => {
      const futureDates = post.meta.dates
        .map((d) => new Date(d))
        .filter((date) => date >= now)
        .sort((a, b) => a.getTime() - b.getTime());

      if (futureDates.length === 0) {
        return null;
      }

      return {
        ...post,
        nextDate: futureDates[0],
      };
    })
    .filter(Boolean) as (Post & { nextDate: Date })[];

  shows.sort((a, b) => a.nextDate.getTime() - b.nextDate.getTime());

  if (typeof props?.perPage !== "undefined") {
    const { page = 1, perPage = 20 } = props;

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return {
      shows: shows.slice(startIndex, endIndex),
      totalPages: Math.ceil(shows.length / perPage),
    };
  } else {
    return {
      shows: shows,
      totalPages: 1,
    };
  }
}

export async function getShowEvents({
  page = 1,
  perPage = 20,
}: {
  page?: number;
  perPage?: number;
}) {
  const { shows } = await getUpcomingShows();

  const allShowEvents = shows.flatMap((show) =>
    show.meta.dates.map((date) => ({
      date,
      show,
    }))
  );

  const filteredAndSorted = allShowEvents
    .filter((event) => new Date(event.date).getTime() >= Date.now())
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const paginatedShowEvents = filteredAndSorted.slice(startIndex, endIndex);

  return {
    showEvents: paginatedShowEvents,
    totalPages: Math.ceil(filteredAndSorted.length / perPage),
  };
}

export async function getShow(slug: string) {
  const shows = await getShows();

  const show = shows.find((show) => show.slug === slug);

  return show;
}
