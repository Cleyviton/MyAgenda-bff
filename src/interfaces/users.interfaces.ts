import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/user.schemas";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserUpdate = DeepPartial<TUserRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;

export { TUser, TUserRequest, TUserUpdate, TUserResponse };
