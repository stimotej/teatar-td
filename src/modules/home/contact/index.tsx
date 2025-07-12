import ContactList from "./contact-list";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto py-12">
      <h3 className="uppercase text-lg sm:text-xl md:text-2xl font-semibold">
        Kontakt
      </h3>
      <ContactList className="mt-6" />
    </section>
  );
}
