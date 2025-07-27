import Location from "./location";
import AboutUs from "./about-us";

export default async function About() {
  return (
    <section className="max-w-6xl mx-auto py-12">
      <AboutUs titleLevel="h2" />
      <Location className="mt-12" />
    </section>
  );
}
