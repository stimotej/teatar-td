"use client";

import { subscribeEmail } from "@/lib/data/newsletter";
import { cn } from "@/lib/utils/cn";
import { useActionState } from "react";
import SubmitButton from "./submit-btn";

export default function NewsletterForm() {
  const [response, formAction] = useActionState(subscribeEmail, null);

  return (
    <>
      <form
        className="flex flex-col sm:flex-row sm:items-center gap-2 mt-4"
        action={formAction}
      >
        <input
          required
          type="email"
          autoComplete="email"
          placeholder="Email adresa"
          name="email"
          className="flex-1 w-full py-3 px-6 flex rounded-full border-3 border-(--primary)"
        />
        <SubmitButton>Prijavi se</SubmitButton>
      </form>

      {response && !!response.message && (
        <p
          className={cn(
            "mt-2 text-center",
            response.success ? "text-green-600" : "text-red-600"
          )}
        >
          {response.message}
        </p>
      )}
    </>
  );
}
