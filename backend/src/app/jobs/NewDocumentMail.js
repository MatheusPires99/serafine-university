import { resolve } from "path";
import Mail from "../../lib/Mail";

class NewDocumentMail {
  get key() {
    return "NewDocumentMail";
  }

  async handle({ data }) {
    const { users, link, name, description } = data;

    await Promise.all(
      users.map(async user => {
        await Mail.sendMail({
          to: `${user.name} <${user.email}>`,
          subject: "Novo documento disponível",
          template: "newDocument",
          context: {
            name: user.name,
            link,
            documentName: name,
            documentDescription: description,
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
      })
    );
  }
}

export default new NewDocumentMail();
