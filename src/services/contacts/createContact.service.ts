import { AppDataSource } from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../error";
import {
  TContact,
  TContactRequest,
} from "../../interfaces/contacts.interfaces";
import { contactSchema } from "../../schemas/contact.schemas";

const createContactService = async (
  authenticatedUserId: number,
  data: TContactRequest
): Promise<TContact> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);
  const date = new Date();

  const ExistingEmail: boolean | undefined = await contactRepository.exist({
    where: {
      user: {
        id: authenticatedUserId,
      },
      email: data.email,
    },
  });

  if (ExistingEmail) {
    throw new AppError("Contact with this email already registered", 409);
  }

  const findUser: User | null = await userRepository.findOneBy({
    id: authenticatedUserId,
  });

  const contact = contactRepository.create({
    ...data,
    registrationDate: date,
    user: findUser!,
  });

  await contactRepository.save(contact);

  return contactSchema.parse(contact);
};

export default createContactService;
