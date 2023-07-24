import { Router } from "express";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import {
  clientSchemaRequest,
  clientSchemaUpdate,
} from "../schemas/client.schemas";
import checkExistingEmail from "../middlewares/checkExistingEmail.middleware";
import {
  createClientController,
  deleteClientController,
  retrieveClientController,
  updateClientController,
} from "../controllers/clients.controller";
import verifyCustomerExistsMiddleware from "../middlewares/verifyCustomerExists.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import verifyCustomerIsOwnermiddleware from "../middlewares/verifyCustomerIsOwner.middleware";

const clietRoutes = Router();

clietRoutes.post(
  "/",
  ensureDataIsValid(clientSchemaRequest),
  checkExistingEmail,
  createClientController
);
clietRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  retrieveClientController
);
clietRoutes.patch(
  "/:id",
  ensureDataIsValid(clientSchemaUpdate),
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  updateClientController
);
clietRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  deleteClientController
);

export { clietRoutes };
