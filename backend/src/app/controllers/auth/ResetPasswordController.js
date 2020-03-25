import * as Yup from "yup";

import User from "../../models/User";

class ResetPasswordController {
  async store(req, res) {
    const schema = Yup.object().shape({
      password: Yup.string().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Field validation fails" });
    }

    const { email, token, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (token !== user.password_reset_token) {
      return res.status(400).json({ error: "Token invalid" });
    }

    const date = new Date();

    if (date > user.password_reset_expires) {
      return res
        .status(400)
        .json({ error: "Token expired, generete a new one" });
    }

    user.password = password;
    user.password_reset_token = null;
    user.password_reset_expires = null;

    await user.save();

    return res.json(user);
  }
}

export default new ResetPasswordController();
