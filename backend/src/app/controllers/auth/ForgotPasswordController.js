import crypto from "crypto";

import User from "../../models/User";

import ForgotPasswordMail from "../../jobs/ForgotPasswordMail";
import Queue from "../../../lib/Queue";

class ForgotPasswordController {
  async store(req, res) {
    const { email } = req.body;

    if (!email) {
      return res.status(401).json({ error: "E-mail is required" });
    }

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const token = crypto.randomBytes(20).toString("hex");

    const date = new Date();
    date.setHours(date.getHours() + 2);

    user.passwordResetToken = token;
    user.passwordResetExpires = date;

    await user.save();

    await Queue.add(ForgotPasswordMail.key, {
      user,
      token,
    });

    return res.json({
      token,
      date,
    });
  }
}

export default new ForgotPasswordController();
