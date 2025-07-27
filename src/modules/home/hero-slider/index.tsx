import { getShows } from "@/lib/data/events";
import { sliderCategoryId } from "@/lib/utils/constants";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/modules/common/components/carousel";
import Slide from "@/modules/common/components/slide";

export default async function HeroSlider() {
  const showsRes = await getShows();

  const sliderShows = showsRes.shows.filter((show) =>
    show.categories.includes(sliderCategoryId)
  );

  if (!sliderShows || sliderShows.length <= 0) return null;

  return (
    <section className="max-w-6xl mx-auto py-12">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {sliderShows.map((show, index) => (
            <CarouselItem key={index}>
              <Slide
                title={show.title.rendered}
                description={show.excerpt.rendered}
                image={show.image_url}
                linkTitle="Kupi ulaznice..."
                linkHref="https://www.ulaznice.hr/web/"
                preloadImage
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white" />
        <CarouselNext className="text-white" />
        <CarouselDots />
      </Carousel>
    </section>
  );
}
