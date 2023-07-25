import { z } from "zod";
import { loginSchema } from "../schemas/Login.schemas";

type TLogin = z.infer<typeof loginSchema>;

export { TLogin };
