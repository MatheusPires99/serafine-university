import { Router } from "express";

import UserController from "./app/controllers/UserController";
import FranchiseeUserController from "./app/controllers/FranchiseeUserController";

import SessionController from "./app/controllers/auth/SessionController";
import ForgotPasswordController from "./app/controllers/auth/ForgotPasswordController";
import ResetPasswordController from "./app/controllers/auth/ResetPasswordController";

import CategoryController from "./app/controllers/CategoryController";
import DocumentController from "./app/controllers/DocumentController";
import DocumentationController from "./app/controllers/DocumentationController";
import LatestDocumentationController from "./app/controllers/LatestDocumentationController";
import DisableDocumentController from "./app/controllers/DisableDocumentController";
import DocumentsInCategoryController from "./app/controllers/DocumentsInCategoryController";

import authMiddlware from "./app/middlewares/auth";
import authAdminMiddleware from "./app/middlewares/adminAuth";

const routes = new Router();

routes.post("/sessions", SessionController.store);

routes.post("/forgot_password", ForgotPasswordController.store);
routes.post("/reset_password", ResetPasswordController.store);

routes.use(authMiddlware);

routes.put("/franchisee_user", FranchiseeUserController.update);

routes.get("/category", CategoryController.index);
routes.get("/category/:id", CategoryController.show);

routes.get("/document", DocumentController.index);
routes.get("/document/:id", DocumentController.show);

routes.get("/documentation", DocumentationController.index);
routes.get("/documentation/:id", DocumentationController.show);

routes.get("/latest_documantiation", LatestDocumentationController.index);

routes.use(authAdminMiddleware);

routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);
routes.post("/user", UserController.store);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.delete);

routes.post("/category", CategoryController.store);
routes.put("/category/:id", CategoryController.update);
routes.delete("/category/:id", CategoryController.delete);

routes.post("/document", DocumentController.store);
routes.put("/document/:id", DocumentController.update);
routes.delete("/document/:id", DocumentController.delete);

routes.delete(
  "/category/:id/disable-document/:document_id",
  DisableDocumentController.delete
);

routes.get("/category-documents/:id", DocumentsInCategoryController.index);

export default routes;
