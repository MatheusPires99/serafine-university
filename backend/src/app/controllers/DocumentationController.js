import Category from "../models/Category";
import Document from "../models/Document";

class DocumentationController {
  async index(req, res) {
    const category = await Category.findAll({
      where: { status: true },
      attributes: ["id", "name", "description", "status"],
      order: [["created_at", "DESC"]],
      include: [
        {
          model: Document,
          as: "documents",
          where: { status: true },
          attributes: ["id", "name", "description", "link", "status"],
        },
      ],
    });

    return res.json(category);
  }

  async show(req, res) {
    const category = await Category.findByPk(req.params.id, {
      where: { status: true },
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

export default new DocumentationController();
