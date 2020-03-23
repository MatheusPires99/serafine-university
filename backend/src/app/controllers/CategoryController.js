import * as Yup from "yup";
import { Op } from "sequelize";

import Category from "../models/Category";

class CategoryController {
  async index(req, res) {
    const { page = 1, q } = req.query;
    const name = q || "";

    const { docs, pages, total } = await Category.paginate({
      where: { status: true, name: { [Op.iLike]: `%${name}%` } },
      attributes: ["id", "name", "description", "status"],
      order: [
        ["status", "DESC"],
        ["id", "DESC"],
      ],
      paginate: 10,
      page,
    });

    return res.json({
      docs,
      page,
      pages,
      total,
    });
  }

  async show(req, res) {
    const category = await Category.findByPk(req.params.id, {
      where: { status: true },
      attributes: ["id", "name", "description", "status"],
    });

    return res.json(category);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Field validation fails" });
    }

    const { id, name, description } = await Category.create(req.body);

    return res.json({
      id,
      name,
      description,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Field validation fails" });
    }

    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(400).json({ error: "Category not found" });
    }

    const { name, description } = await category.update(req.body);

    return res.json({ name, description });
  }

  async delete(req, res) {
    const category = await Category.findOne({
      where: { id: req.params.id, status: true },
    });

    if (!category) {
      return res.status(400).json({
        error: "Category not found or maybe it has already been deleted",
      });
    }

    category.status = false;

    await category.save();

    return res.json({
      message: `Category ${category.name} deleted with success`,
    });
  }
}

export default new CategoryController();
