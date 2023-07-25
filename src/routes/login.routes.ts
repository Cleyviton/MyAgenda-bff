import { Router } from "express";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { loginSchema } from "../schemas/Login.schemas";
import { createLoginController } from "../controllers/login.controller";

const loginRoutes = Router();

loginRoutes.post("/", ensureDataIsValid(loginSchema), createLoginController);

export { loginRoutes };
