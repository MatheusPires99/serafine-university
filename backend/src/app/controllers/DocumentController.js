import * as Yup from "yup";
import { Op } from "sequelize";

import Category from "../models/Category";
import Document from "../models/Document";
import User from "../models/User";

import NewDocumentMail from "../jobs/NewDocumentMail";
import Queue from "../../lib/Queue";

class DocumentController {
  async index(req, res) {
    const { page = 1, q = "" } = req.query;
    const name = q || "";

    const { docs, pages, total } = await Document.paginate({
      where: { status: true, name: { [Op.iLike]: `%${name}%` } },
      attributes: ["id", "name", "description", "link", "status"],
      order: [
        ["status", "DESC"],
        ["id", "DESC"],
      ],
      paginate: 10,
      page,
      include: {
        model: Category,
        as: "category",
        attributes: ["id", "name", "description", "status"],
      },
    });

    return res.json({ docs, page, pages, total });
  }

  async show(req, res) {
    const document = await Document.findByPk(req.params.id, {
      where: { status: true },
      attributes: ["id", "name", "description", "link", "status"],
      include: {
        model: Category,
        as: "category",
        attributes: ["id", "name", "description", "status"],
      },
    });

    return res.json(document);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      link: Yup.string().required(),
      category_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Field validation fails" });
    }

    const { category_id } = req.body;

    const categoryExists = await Category.findByPk(category_id);

    if (!categoryExists) {
      return res.status(401).json({ error: "Category does not exist" });
    }

    const { id, name, description, link } = await Document.create(req.body);

    const users = await User.findAll({
      where: { admin: false },
      attributes: ["name", "email"],
    });

    await Queue.add(NewDocumentMail.key, {
      users,
      link,
      name,
      description,
    });

    return res.json({
      id,
      name,
      description,
      link,
      category_id,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
      link: Yup.string(),
      category_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Field validation fails" });
    }

    const document = await Document.findByPk(req.params.id);

    if (!document) {
      return res.status(400).json({ error: "Document not found" });
    }

    const { category_id } = req.body;

    const category = await Category.findByPk(category_id);

    if (!category) {
      return res
        .status(401)
        .json({ error: `Category with identifier ${category_id} not found` });
    }

    const { name, description, link } = await document.update(req.body);

    return res.json({
      name,
      description,
      link,
      category_id,
    });
  }

  async delete(req, res) {
    const document = await Document.findByPk(req.params.id);

    if (!document) {
      return res.status(401).json({ error: "Document not found" });
    }

    document.status = false;

    await document.save();

    return res.json({
      message: `Document ${document.name} deleted with success`,
    });
  }
}

export default new DocumentController();
