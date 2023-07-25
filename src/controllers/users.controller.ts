import { Response, Request } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdate,
} from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import retrieveUserService from "../services/users/retrieveUser.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const data: TUserRequest = req.body;

  const newUser: TUserResponse = await createUserService(data);

  return res.status(201).json(newUser);
};

const retrieveUserController = async (req: Request, res: Response) => {
  const authenticatedUserId: number = parseInt(res.locals.UserId);

  const user: TUserResponse = await retrieveUserService(authenticatedUserId);

  return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  const newData: TUserUpdate = req.body;

  const user: TUserResponse = await updateUserService(userId, newData);

  return res.json(user);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
};
