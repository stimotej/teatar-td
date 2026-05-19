import type { Metadata } from "next";
import LinkButton from "@/modules/common/components/link-button";
import PageTitle from "@/modules/common/components/page-title";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  title: "Newsletter odjava",
  robots: {
    index: false,
    follow: false,
  },
};

const statusConfig = {
  success: {
    title: "Uspješno ste odjavljeni",
    message:
      "Vaša email adresa je uspješno odjavljena s Teatar&TD newslettera. Više nećete primati buduće newsletter poruke.",
  },
  expired: {
    title: "Poveznica je istekla",
    message:
      "Poveznica za odjavu više nije važeća. Ako i dalje želite odjavu, pokušajte ponovno iz najnovijeg newsletter emaila.",
  },
  invalid: {
    title: "Poveznica nije važeća",
    message:
      "Poveznica za odjavu nije ispravna ili je već nevažeća. Ako i dalje želite odjavu, otvorite najnoviji newsletter email i pokušajte ponovno.",
  },
  missing: {
    title: "Poveznica nije potpuna",
    message:
      "Nedostaje token za odjavu. Otvorite poveznicu iz newsletter emaila i pokušajte ponovno.",
  },
  "not-found": {
    title: "Pretplatnik nije pronađen",
    message:
      "Nismo pronašli pretplatnika za ovu poveznicu za odjavu. Ako smatrate da je ovo pogreška, kontaktirajte nas.",
  },
  error: {
    title: "Došlo je do greške",
    message:
      "Odjava trenutno nije uspjela. Pokušajte ponovno kasnije ili nas kontaktirajte ako problem potraje.",
  },
} as const;

export default async function NewsletterUnsubscribePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const rawStatus = params.status;
  const status = Array.isArray(rawStatus) ? rawStatus[0] : rawStatus;
  const content =
    status && status in statusConfig
      ? statusConfig[status as keyof typeof statusConfig]
      : statusConfig.error;

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center">
      <div className="w-full rounded-3xl border-3 border-(--primary) bg-white px-6 py-10 text-center shadow-sm sm:px-10">
        <PageTitle level="h1" className="mb-6">
          {content.title}
        </PageTitle>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-black/75 sm:text-lg">
          {content.message}
        </p>
        {status === "success" ? (
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-6 text-black/60 sm:text-base">
            Ako se predomislite, ponovno se prijavite putem newsletter forme.
          </p>
        ) : null}
        <div className="flex justify-center">
          <LinkButton href="/" size="md">
            Povratak na naslovnicu
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
