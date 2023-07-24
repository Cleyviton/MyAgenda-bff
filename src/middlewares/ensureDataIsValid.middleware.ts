import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { TClientRequest } from "../interfaces/clients.interfaces";

const ensureDataIsValid =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData: TClientRequest = schema.parse(req.body);

    req.body = validatedData;

    next();
  };

export default ensureDataIsValid;
