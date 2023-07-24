import { Response, Request } from "express";
import {
  TClientRequest,
  TClientResponse,
  TClientUpdate,
} from "../interfaces/clients.interfaces";
import createClientService from "../services/clients/createClient.service";
import retrieveClientService from "../services/clients/retrieveClient.service";
import updateClientService from "../services/clients/updateClient.service";
import deleteClientService from "../services/clients/deleteClient.service";

const createClientController = async (req: Request, res: Response) => {
  const data: TClientRequest = req.body;

  const newClient: TClientResponse = await createClientService(data);

  return res.status(201).json(newClient);
};

const retrieveClientController = async (req: Request, res: Response) => {
  const clientId: number = parseInt(req.params.id);

  const client: TClientResponse = await retrieveClientService(clientId);

  return res.json(client);
};
const updateClientController = async (req: Request, res: Response) => {
  const clientId: number = parseInt(req.params.id);
  const newData: TClientUpdate = req.body;

  const client: TClientResponse = await updateClientService(clientId, newData);

  return res.json(client);
};
const deleteClientController = async (req: Request, res: Response) => {
  const clientId: number = parseInt(req.params.id);

  await deleteClientService(clientId);

  return res.status(204).send();
};

export {
  createClientController,
  retrieveClientController,
  updateClientController,
  deleteClientController,
};
