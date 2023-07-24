import { AppDataSource } from "../../data-source";
import { Client } from "../../entities";
import {
  TClient,
  TClientResponse,
  TClientUpdate,
} from "../../interfaces/clients.interfaces";
import { clientSchemaResponse } from "../../schemas/client.schemas";

const updateClientService = async (
  clientId: number,
  newData: TClientUpdate
): Promise<TClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const oldClient: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  const newClient: Client = clientRepository.create({
    ...oldClient,
    ...newData,
  });

  await clientRepository.save(newClient);

  return clientSchemaResponse.parse(newClient);
};

export default updateClientService;
