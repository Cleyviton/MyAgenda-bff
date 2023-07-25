import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { userSchemaResponse } from "../../schemas/user.schemas";

const retrieveUserService = async (
  authenticatedUserId: number
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: authenticatedUserId,
  });

  return userSchemaResponse.parse(user);
};

export default retrieveUserService;
