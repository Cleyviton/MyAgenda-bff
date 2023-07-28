import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../error";
import {
  TContact,
  TContactRequest,
  TContactUpdate,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contact.schemas";

const updateContactService = async (
  authenticatedUserId: number,
  contactId: number,
  data: TContactUpdate
): Promise<TContact> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const oldContact = await contactRepository.findOneBy({
    user: {
      id: authenticatedUserId,
    },
    id: contactId,
  });

  if (!oldContact) {
    throw new AppError("Contact not found", 404);
  }

  if (data.email && data.email != oldContact.email) {
    const ExistingEmail: boolean | undefined = await contactRepository.exist({
      where: {
        user: {
          id: authenticatedUserId,
        },
        email: data.email!,
      },
    });

    if (ExistingEmail) {
      throw new AppError("Contact with this email already registered", 409);
    }
  }

  const findUser: User | null = await userRepository.findOneBy({
    id: authenticatedUserId,
  });

  const newContact = contactRepository.create({
    ...oldContact,
    ...data,
    user: findUser!,
  });

  await contactRepository.save(newContact);

  return contactSchema.parse(newContact);
};

export default updateContactService;
