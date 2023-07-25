import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

const checkExistingEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository = AppDataSource.getRepository(User);

  const ExistingEmail: boolean | undefined = await userRepository.exist({
    where: {
      email: req.body.email,
    },
  });

  if (ExistingEmail) {
    if (req.method == "POST") {
      return res.status(409).json({
        message: "Email already exists",
      });
    } else {
      const user = await userRepository.findOneBy({
        id: parseInt(res.locals.UserId),
      });

      if (req.body.email != user!.email) {
        return res.status(409).json({
          message: "Email already exists",
        });
      }
    }
  }

  next();
};

export default checkExistingEmail;
