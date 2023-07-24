import { AppDataSource } from "../../data-source";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/clients.interfaces";
import { Client } from "../../entities";
import { clientSchemaResponse } from "../../schemas/client.schemas";

const createClientService = async (
  data: TClientRequest
): Promise<TClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const date = new Date();

  const client = clientRepository.create({ ...data, registrationDate: date });

  await clientRepository.save(client);

  return clientSchemaResponse.parse(client);
};

export default createClientService;
