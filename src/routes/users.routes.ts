import { Router } from "express";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schemas";
import checkExistingEmail from "../middlewares/checkExistingEmail.middleware";
import {
  createUserController,
  deleteUserController,
  retrieveUserController,
  updateUserController,
} from "../controllers/users.controller";
import verifyCustomerExistsMiddleware from "../middlewares/verifyCustomerExists.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import verifyCustomerIsOwnermiddleware from "../middlewares/verifyCustomerIsOwner.middleware";

const userRoutes = Router();

userRoutes.post(
  "/",
  ensureDataIsValid(userSchemaRequest),
  checkExistingEmail,
  createUserController
);
userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  retrieveUserController
);
userRoutes.patch(
  "/:id",
  ensureDataIsValid(userSchemaUpdate),
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  verifyCustomerExistsMiddleware,
  verifyCustomerIsOwnermiddleware,
  deleteUserController
);

export { userRoutes };
