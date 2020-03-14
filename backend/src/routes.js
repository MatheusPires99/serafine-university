import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import CategoryController from "./app/controllers/CategoryController";
import DocumentController from "./app/controllers/DocumentController";
import DocumentationController from "./app/controllers/DocumentationController";
import DisableDocumentController from "./app/controllers/DisableDocumentController";
import DocumentsInCategoryController from "./app/controllers/DocumentsInCategoryController";

import authMiddlware from "./app/middlewares/auth";
import authAdminMiddleware from "./app/middlewares/adminAuth";

const routes = new Router();

routes.post("/sessions", SessionController.store);

routes.use(authMiddlware);

routes.put("/users/:id", UserController.update);

routes.get("/category", CategoryController.index);
routes.get("/category/:id", CategoryController.show);

routes.get("/document", DocumentController.index);
routes.get("/document/:id", DocumentController.show);

routes.use(authAdminMiddleware);

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.delete("/users/:id", UserController.delete);

routes.post("/category", CategoryController.store);
routes.put("/category/:id", CategoryController.update);
routes.delete("/category/:id", CategoryController.delete);

routes.post("/document", DocumentController.store);
routes.put("/document/:id", DocumentController.update);
routes.delete("/document/:id", DocumentController.delete);

routes.get("/documentation", DocumentationController.index);
routes.get("/documentation/:id", DocumentationController.show);

routes.delete(
  "/category/:id/disable-document/:document_id",
  DisableDocumentController.delete
);

routes.get("/category-documents/:id", DocumentsInCategoryController.index);

export default routes;
