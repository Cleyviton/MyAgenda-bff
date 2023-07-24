import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";

const deleteClientService = async (clientId: number): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const oldClient: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  await clientRepository.remove(oldClient!);

  return;
};

export default deleteClientService;
