import Slide from "../post-slider/slide";
import { getShows } from "@/lib/data/events";

export default async function HeroSlide() {
  const showsRes = await getShows();

  const firstShow = showsRes.shows[0];

  if (!firstShow) return null;

  return (
    <section className="max-w-6xl mx-auto py-12">
      <Slide
        title="Predstave mjeseca"
        linkTitle="Kupi ulaznice..."
        linkHref="https://www.ulaznice.hr/web/"
        image="https://www.sczg.unizg.hr/wp-content/uploads/2025/07/teatar-td-o-nama-3.webp"
        preloadImage
      />
    </section>
  );
}
