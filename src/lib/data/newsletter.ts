"use server";

import fetchApi from "../utils/api";

interface NewsletterResponse {
  success: boolean;
  message: string;
}

export async function subscribeEmail(
  _currentState: unknown,
  formData: FormData
): Promise<NewsletterResponse> {
  const email = formData.get("email") as string;

  if (!email || typeof email !== "string") {
    return { success: false, message: "Neispravan unos" };
  }

  try {
    await fetchApi("/newsletter/submit", {
      method: "POST",
      body: JSON.stringify({ email, page: "teatar-td" }),
    });

    return {
      success: true,
      message: "Uspješno ste se pretplatili na newsletter",
    };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return { success: false, message: "Pretplata na newsletter nije uspjela" };
  }
}
