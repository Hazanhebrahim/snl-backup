"use server";

type FormState = {
  success: boolean;
  error: string | null;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const company = formData.get("company")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Name, email, and message are required." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // TODO: send via email provider (e.g. Resend, SendGrid) or CRM webhook.
  // For now we log server-side and return success.
  console.log("Contact form submission:", { name, email, company, message });

  return { success: true, error: null };
}
