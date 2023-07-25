import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../error";
import { TContact } from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contact.schemas";

const retrieveContactService = async (
  authenticatedUserId: number,
  contactId: number
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({
    user: {
      id: authenticatedUserId,
    },
    id: contactId,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return contactSchema.parse(contact);
};

export default retrieveContactService;
