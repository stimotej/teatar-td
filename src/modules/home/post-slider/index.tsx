import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/modules/common/components/carousel";
import Slide from "./slide";
import { getShows } from "@/lib/data/events";
import PageTitle from "@/modules/common/components/page-title";
import LinkButton from "@/modules/common/components/link-button";

export default async function PostSlider() {
  const showsRes = await getShows();

  const firstThreeShows = showsRes.shows.slice(1, 4);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <PageTitle>Na programu</PageTitle>
      <Carousel
        className="w-full my-12"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {firstThreeShows.map((show, index) => (
            <CarouselItem key={index}>
              <Slide
                title={show.title.rendered}
                description={show.excerpt.rendered}
                image={show.image_url}
                preloadImage
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
        <CarouselDots />
      </Carousel>
      <LinkButton
        href="https://www.ulaznice.hr/web/"
        target="_blank"
        rel="noreferrer noopener"
        size="lg"
        className="mx-auto"
      >
        Kupi ulaznice
      </LinkButton>
    </div>
  );
}
