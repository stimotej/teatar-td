import LinkButton from "@/modules/common/components/link-button";
import { Separator } from "@/modules/common/components/separator";

export default function NotFound() {
  return (
    <main className="p-6 md:p-8 lg:p-12">
      <Separator />
      <div className="py-52 flex flex-col gap-4 items-center justify-center">
        <p className="text-9xl font-bold">404</p>
        <h1 className="text-2xl font-bold">Stranica nije pronađena</h1>
        <LinkButton href="/" className="mt-6">
          Povratak na početnu
        </LinkButton>
      </div>
      <Separator />
    </main>
  );
}
