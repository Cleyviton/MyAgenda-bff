import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";

const verifyCustomerExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const clientId: number = parseInt(req.params.id);
  const clientRepository = AppDataSource.getRepository(Client);

  const ExistingClient: boolean | undefined = await clientRepository.exist({
    where: {
      id: clientId,
    },
  });

  if (!ExistingClient) {
    return res.status(404).json({
      message: "client not found",
    });
  }

  next();
};

export default verifyCustomerExistsMiddleware;
