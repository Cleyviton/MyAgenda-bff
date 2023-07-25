import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { TUserRequest } from "../interfaces/users.interfaces";

const ensureDataIsValid =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData: TUserRequest = schema.parse(req.body);

    req.body = validatedData;

    next();
  };

export default ensureDataIsValid;
