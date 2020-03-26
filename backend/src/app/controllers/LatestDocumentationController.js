import { QueryTypes } from "sequelize";

import db from "../../database";

import Category from "../models/Category";
import Document from "../models/Document";

const { connection } = db;

class LatestDocumentationController {
  async index(req, res) {
    let lastCategory;

    await Promise.all(
      (lastCategory = await connection.query(
        "SELECT max(id) FROM categories WHERE status = true",
        {
          type: QueryTypes.SELECT,
          raw: true,
        }
      ))
    );

    const lastCategoryId = [];

    lastCategory.map(id => {
      return lastCategoryId.push(id.max);
    });

    const category = await Category.findOne({
      where: { id: lastCategoryId, status: true },
      attributes: ["id", "name", "description", "status"],
      include: [
        {
          model: Document,
          as: "documents",
          where: { status: true },
          attributes: ["id", "name", "description", "link", "status"],
        },
      ],
      order: [[{ model: Document, as: "documents" }, "id", "DESC"]],
    });

    return res.json(category);
  }
}

export default new LatestDocumentationController();
