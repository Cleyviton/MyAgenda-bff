import { compareSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import { AppError } from "../../error";
import { TClient } from "../../interfaces/clients.interfaces";
import { TLogin } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createLoginService = async (data: TLogin): Promise<string> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient: Client | null = await clientRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!findClient) {
    throw new AppError("Invalid credentials", 401);
  }

  const verifyPassword = compareSync(data.password, findClient.password);

  if (!verifyPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "1d",
    subject: String(findClient.id),
  });

  return token;
};

export default createLoginService;
