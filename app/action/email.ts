import { public_key, service_id, template_id } from "@/lib/utils";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export async function sendEmailAction(prev: unknown, formData: FormData) {
  const submitData = {
    user_name: formData.get("user_name"),
    user_email: formData.get("user_email"),
    message: formData.get("message"),
    subject: formData.get("subject"),
  };
  try {
    await emailjs.send(
      service_id as string,
      template_id as string,
      submitData,
      {
        publicKey: public_key,
      }
    );
    console.log("SUCCESS!");
    return { message: "Email sent successfully", type: "success" };
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log("EMAILJS FAILED...", err);
      return { message: "Email failed to send", type: "error" };
    }

    console.log("ERROR", err);
  }
}
