import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";

const updateUserService = async (
  userId: number,
  newData: TUserUpdate
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const oldUser: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUser: User = userRepository.create({
    ...oldUser,
    ...newData,
  });

  await userRepository.save(newUser);

  return userSchemaResponse.parse(newUser);
};

export default updateUserService;
