import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  createContactController,
  deleteContactController,
  listContactController,
  retrieveContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import {
  contactSchemaRequest,
  contactSchemaUpdate,
} from "../schemas/contact.schemas";

const contactRoutes = Router();

contactRoutes.post(
  "/",
  ensureAuthMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);
contactRoutes.get("/", ensureAuthMiddleware, listContactController);
contactRoutes.get("/:id", ensureAuthMiddleware, retrieveContactController);
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValid(contactSchemaUpdate),
  updateContactController
);
contactRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

export { contactRoutes };
