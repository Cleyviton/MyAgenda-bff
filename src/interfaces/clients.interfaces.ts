import { z } from "zod";
import {
  clientSchema,
  clientSchemaRequest,
  clientSchemaResponse,
  clientSchemaUpdate,
} from "../schemas/client.schemas";
import { DeepPartial } from "typeorm";

type TClient = z.infer<typeof clientSchema>;
type TClientRequest = z.infer<typeof clientSchemaRequest>;
type TClientUpdate = DeepPartial<TClientRequest>;
type TClientResponse = z.infer<typeof clientSchemaResponse>;

export { TClient, TClientRequest, TClientUpdate, TClientResponse };
