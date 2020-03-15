import Document from "../models/Document";

class DocumentsInCategoryController {
  async index(req, res) {
    const documents = await Document.findAll({
      where: { category_id: req.params.id, status: true },
      attributes: ["id", "name", "description", "link", "status"],
    });

    return res.json(documents);
  }
}

export default new DocumentsInCategoryController();
