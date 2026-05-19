"use server";

import fetchApi from "../utils/api";

interface NewsletterResponse {
  success: boolean;
  message: string;
}

interface NewsletterApiResponse {
  success?: boolean;
  reactivated?: boolean;
  message?: string;
}

const mapNewsletterError = (message: string) => {
  switch (message) {
    case "Email is already subscribed.":
      return "Ova email adresa je već prijavljena na newsletter";
    case "Please provide a valid email address.":
      return "Unesite ispravnu email adresu";
    case "Email is required.":
      return "Unesite email adresu";
    case "Page is required.":
    case "Invalid page value.":
      return "Prijava na newsletter trenutno nije dostupna";
    default:
      return "Pretplata na newsletter nije uspjela";
  }
};

export async function subscribeEmail(
  _currentState: unknown,
  formData: FormData
): Promise<NewsletterResponse> {
  const email = formData.get("email") as string;

  if (!email || typeof email !== "string") {
    return { success: false, message: "Neispravan unos" };
  }

  try {
    const response = await fetchApi<NewsletterApiResponse>("/newsletter/submit", {
      method: "POST",
      body: JSON.stringify({ email, page: "teatar-td" }),
    });

    return {
      success: true,
      message:
        response?.reactivated || response?.message === "Newsletter subscription reactivated."
          ? "Vaša prijava na newsletter je ponovno aktivirana"
          : "Uspješno ste se pretplatili na newsletter",
    };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    const message =
      error instanceof Error
        ? mapNewsletterError(error.message)
        : "Pretplata na newsletter nije uspjela";

    return { success: false, message };
  }
}
