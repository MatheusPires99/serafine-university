import Sequelize from "sequelize";

import User from "../app/models/User";
import Category from "../app/models/Category";
import Document from "../app/models/Document";

import databaseConfig from "../config/database";

const models = [User, Category, Document];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();
