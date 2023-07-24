import { AppDataSource } from "../../data-source";
import { TClientResponse } from "../../interfaces/clients.interfaces";
import { Client } from "../../entities";
import { clientSchemaResponse } from "../../schemas/client.schemas";

const retrieveClientService = async (
  clientId: number
): Promise<TClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  return clientSchemaResponse.parse(client);
};

export default retrieveClientService;
