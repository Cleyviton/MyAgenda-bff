import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

const deleteUserService = async (userId: number): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const oldUser: User | null = await userRepository.findOneBy({
    id: userId,
  });

  await userRepository.remove(oldUser!);

  return;
};

export default deleteUserService;
