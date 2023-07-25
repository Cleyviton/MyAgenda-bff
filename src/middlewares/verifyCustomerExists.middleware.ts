import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

const verifyCustomerExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId: number = parseInt(req.params.id);
  const userRepository = AppDataSource.getRepository(User);

  const existingUser: boolean | undefined = await userRepository.exist({
    where: {
      id: userId,
    },
  });

  if (!existingUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  next();
};

export default verifyCustomerExistsMiddleware;
