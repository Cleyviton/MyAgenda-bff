import { z } from "zod";

const clientSchema = z.object({
  id: z.number(),
  name: z.string().max(55),
  email: z.string().email().max(45),
  password: z.string().max(120),
  phone: z.string().max(20),
  registrationDate: z.string(),
});

const clientSchemaRequest = clientSchema.omit({
  id: true,
  registrationDate: true,
});

const clientSchemaUpdate = clientSchemaRequest.partial();

const clientSchemaResponse = clientSchema.omit({
  password: true,
});

export {
  clientSchema,
  clientSchemaRequest,
  clientSchemaUpdate,
  clientSchemaResponse,
};
