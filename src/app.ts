import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErros } from "./error";
import { clietRoutes } from "./routes/clients.routes";
import { loginRoutes } from "./routes/login.routes";

const app: Application = express();
app.use(express.json());

app.use("/client", clietRoutes);
app.use("/login", loginRoutes);

app.use(handleErros);

export default app;
