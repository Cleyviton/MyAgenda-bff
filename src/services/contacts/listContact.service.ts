import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";
import { contactsSchemaResponse } from "../../schemas/contact.schemas";

const listContactService = async (
  authenticatedUserId: number
): Promise<TContactsResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find({
    where: {
      user: {
        id: authenticatedUserId,
      },
    },
  });

  return contactsSchemaResponse.parse(contacts);
};

export default listContactService;
