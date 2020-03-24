import { resolve } from "path";
import Mail from "../../lib/Mail";

class ForgotPasswordMail {
  get key() {
    return "ForgotPasswordMail";
  }

  async handle({ data }) {
    const { user, token } = data;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: "Recuperação de senha",
      template: "forgotPassword",
      context: {
        email: user.email,
        token,
      },
      attachments: [
        {
          filename: "instagram.svg",
          path: resolve(
            __dirname,
            "..",
            "..",
            "assets",
            "icons",
            "instagram.svg"
          ),
          cid: "instagram",
        },
        {
          filename: "facebook.svg",
          path: resolve(
            __dirname,
            "..",
            "..",
            "assets",
            "icons",
            "facebook.svg"
          ),
          cid: "facebook",
        },
        {
          filename: "twitter.svg",
          path: resolve(
            __dirname,
            "..",
            "..",
            "assets",
            "icons",
            "twitter.svg"
          ),
          cid: "twitter",
        },
      ],
    });
  }
}

export default new ForgotPasswordMail();
