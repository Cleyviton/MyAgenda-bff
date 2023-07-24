import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities";

const verifyCustomerIsOwnermiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authenticatedClientId: number = parseInt(res.locals.clientId);
  const clientId: number = parseInt(req.params.id);
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  if (authenticatedClientId !== findClient!.id) {
    return res.status(403).json({
      message: "You dont`t have permissions",
    });
  }

  next();
};

export default verifyCustomerIsOwnermiddleware;
