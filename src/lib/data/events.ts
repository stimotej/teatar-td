import fetchApi from "@/lib/utils/api";
import type { Post } from "@/models/post";
import { revalidateTime } from "../utils/constants";

export async function getShows(props?: {
  page?: number;
  perPage?: number;
  year?: number;
}) {
  const params: Record<string, string> = {
    location: "Teatar &TD",
    per_page: "9999",
    orderby: "date",
    order: "desc",
  };

  const queryParams = new URLSearchParams(params).toString();

  let posts = await fetchApi<Post[]>(`/event?${queryParams}`, {
    next: {
      revalidate: revalidateTime,
      tags: ["events"],
    },
    cache: "force-cache",
  });

  if (typeof props?.year !== "undefined") {
    posts = posts.filter((post) => {
      const sortedDates = post.meta.dates.sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateA.getTime() - dateB.getTime();
      });
      const premiereDate = new Date(sortedDates[0]);
      return premiereDate.getFullYear() === props.year;
    });
  }

  if (typeof props?.perPage !== "undefined") {
    const { page = 1, perPage = 20 } = props;

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return {
      shows: posts.slice(startIndex, endIndex),
      totalPages: Math.ceil(posts.length / perPage),
    };
  } else {
    return {
      shows: posts,
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
  const { shows } = await getShows();

  const allShowEvents = shows.flatMap((show) =>
    show.meta.dates.map((date) => ({
      date,
      show,
    }))
  );

  // const filteredAndSorted = allShowEvents
  //   // .filter((event) => new Date(event.date).getTime() >= Date.now())
  //   .sort((a, b) => {
  //     const dateA = new Date(a.date);
  //     const dateB = new Date(b.date);
  //     return dateA.getTime() - dateB.getTime();
  //   });

  const filteredAndSorted = allShowEvents.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const now = Date.now();

    const aIsFutureOrToday = dateA.getTime() >= now;
    const bIsFutureOrToday = dateB.getTime() >= now;

    if (aIsFutureOrToday === bIsFutureOrToday) {
      if (aIsFutureOrToday) {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    }

    return aIsFutureOrToday ? -1 : 1;
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
  const { shows } = await getShows();

  const show = shows.find((show) => show.slug === slug);

  return show;
}
