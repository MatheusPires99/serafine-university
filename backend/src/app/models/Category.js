import Sequelize, { Model } from "sequelize";
import sequelizePaginate from "sequelize-paginate";

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    sequelizePaginate.paginate(Category);
    return this;
  }

  static associate(models) {
    this.hasMany(models.Document, {
      foreignKey: "category_id",
      as: "documents",
    });
  }
}

export default Category;
