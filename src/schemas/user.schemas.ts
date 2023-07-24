import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(55),
  email: z.string().email().max(45),
  password: z.string().max(120),
  phone: z.string().max(20),
  registrationDate: z.string(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  registrationDate: true,
});

const userSchemaUpdate = userSchemaRequest.partial();

const userSchemaResponse = userSchema.omit({
  password: true,
});

export { userSchema, userSchemaRequest, userSchemaUpdate, userSchemaResponse };
