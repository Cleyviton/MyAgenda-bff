import { Response, Request } from "express";
import { TLogin } from "../interfaces/login.interfaces";
import createLoginService from "../services/login/createLogin.service";

const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TLogin = req.body;
  const token: string = await createLoginService(data);

  return res.status(200).json({
    token: token,
  });
};

export { createLoginController };
