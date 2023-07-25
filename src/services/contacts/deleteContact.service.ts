import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../error";

const deleteContactService = async (
  authenticatedUserId: number,
  contactId: number
): Promise<void> => {
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

  await contactRepository.remove(contact);

  return;
};

export default deleteContactService;
