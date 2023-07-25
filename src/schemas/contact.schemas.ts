import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  name: z.string().max(55),
  email: z.string().email().max(45),
  phone: z.string().max(20),
  registrationDate: z.string(),
});

const contactsSchemaResponse = z.array(contactSchema);

const contactSchemaRequest = contactSchema.omit({
  id: true,
  registrationDate: true,
});

const contactSchemaUpdate = contactSchemaRequest.partial();

export {
  contactSchema,
  contactsSchemaResponse,
  contactSchemaRequest,
  contactSchemaUpdate,
};
