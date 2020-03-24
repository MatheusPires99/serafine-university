import User from "../../models/User";

class ResetPasswordController {
  async store(req, res) {
    const { email, token, password, confirmPassword } = req.body;
  }
}

export default new ResetPasswordController();
