import Document from "../models/Document";

class DocumentsInCategoryController {
  async index(req, res) {
    const documents = await Document.findAll({
      where: { category_id: req.params.id },
    });

    return res.json(documents);
  }
}

export default new DocumentsInCategoryController();
