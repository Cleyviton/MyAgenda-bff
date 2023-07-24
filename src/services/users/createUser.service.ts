import { AppDataSource } from "../../data-source";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { userSchemaResponse } from "../../schemas/user.schemas";

const createUserService = async (
  data: TUserRequest
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const date = new Date();

  const user = userRepository.create({ ...data, registrationDate: date });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export default createUserService;
