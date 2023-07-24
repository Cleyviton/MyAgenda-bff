import { compareSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { TUser } from "../../interfaces/users.interfaces";
import { TLogin } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createLoginService = async (data: TLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!findUser) {
    throw new AppError("Invalid credentials", 401);
  }

  const verifyPassword = compareSync(data.password, findUser.password);

  if (!verifyPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "1d",
    subject: String(findUser.id),
  });

  return token;
};

export default createLoginService;
