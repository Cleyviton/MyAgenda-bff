import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";

const checkExistingEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const ExistingEmail: boolean | undefined = await clientRepository.exist({
    where: {
      email: req.body.email,
    },
  });

  if (ExistingEmail) {
    return res.status(409).json({
      message: "Email already exists",
    });
  }

  next();
};

export default checkExistingEmail;
