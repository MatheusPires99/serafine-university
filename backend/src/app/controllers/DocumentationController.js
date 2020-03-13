import Category from "../models/Category";
import Document from "../models/Document";

class DocumentationController {
  async index(req, res) {
    const { documentPage = 1 } = req.query;

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
          limit: 5,
          offset: (documentPage - 1) * 5,
          // order: [["documents", "id", "DESC"]],
        },
      ],
    });

    return res.json(category);
  }

  async show(req, res) {
    const { documentPage = 1 } = req.query;

    const category = await Category.findByPk(req.params.id, {
      where: { status: true },
      attributes: ["id", "name", "description", "status"],
      include: [
        {
          model: Document,
          as: "documents",
          where: { status: true },
          attributes: ["id", "name", "description", "link", "status"],
          limit: 5,
          offset: (documentPage - 1) * 5,
        },
      ],
    });

    return res.json(category);
  }
}

export default new DocumentationController();
