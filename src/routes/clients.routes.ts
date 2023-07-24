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

const clientRoutes = Router();

clientRoutes.post(
  "/",
  ensureDataIsValid(clientSchemaRequest),
  checkExistingEmail,
  createClientController
);
clientRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  retrieveClientController
);
clientRoutes.patch(
  "/:id",
  ensureDataIsValid(clientSchemaUpdate),
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  updateClientController
);
clientRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  deleteClientController
);

export { clientRoutes };
