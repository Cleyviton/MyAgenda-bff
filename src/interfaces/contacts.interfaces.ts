import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contact.schemas";
import { DeepPartial } from "typeorm";

type TContact = z.infer<typeof contactSchema>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactUpdate = DeepPartial<TContactRequest>;

export { TContact, TContactsResponse, TContactRequest, TContactUpdate };
