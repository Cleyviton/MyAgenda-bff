import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./error";
import { userRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";
import { contactRoutes } from "./routes/contacts.routes";
import cors from "cors";

const app: Application = express();
app.use(express.json());

app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);

app.use(handleErros);

export default app;
