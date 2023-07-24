import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

const verifyCustomerIsOwnermiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authenticatedUserId: number = parseInt(res.locals.UserId);
  const userId: number = parseInt(req.params.id);
  const userRepository = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (authenticatedUserId !== findUser!.id) {
    return res.status(403).json({
      message: "You dont`t have permissions",
    });
  }

  next();
};

export default verifyCustomerIsOwnermiddleware;
