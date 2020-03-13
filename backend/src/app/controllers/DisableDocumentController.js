import Category from "../models/Category";
import Document from "../models/Document";

class DisableDocumentController {
  async delete(req, res) {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(401).json({ error: "Category not found" });
    }

    const { id } = category;

    const document = await Document.findOne({
      where: { id: req.params.document_id, category_id: id, status: true },
      attributes: ["id", "name", "description", "link", "status"],
    });

    if (!document) {
      return res.status(401).json({
        error: "Document not found or maybe has is already been deleted",
      });
    }

    document.status = false;

    await document.save();

    return res.json(document);
  }
}

export default new DisableDocumentController();
