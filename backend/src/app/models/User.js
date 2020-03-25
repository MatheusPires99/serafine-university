import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";
import sequelizePaginate from "sequelize-paginate";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
        password_reset_token: Sequelize.STRING,
        password_reset_expires: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    sequelizePaginate.paginate(User);
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
