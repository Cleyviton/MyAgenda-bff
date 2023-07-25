import { Response, Request } from "express";
import {
  TContact,
  TContactRequest,
  TContactUpdate,
  TContactsResponse,
} from "../interfaces/contacts.interfaces";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactService from "../services/contacts/listContact.service";
import retrieveContactService from "../services/contacts/retrieveContact.service";
import updateContactService from "../services/contacts/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  const authenticatedUserId: number = parseInt(res.locals.UserId);
  const data: TContactRequest = req.body;

  const newUser: TContact = await createContactService(
    authenticatedUserId,
    data
  );

  return res.status(201).json(newUser);
};

const listContactController = async (req: Request, res: Response) => {
  const authenticatedUserId: number = parseInt(res.locals.UserId);

  const contacts: TContactsResponse = await listContactService(
    authenticatedUserId
  );

  return res.json(contacts);
};

const retrieveContactController = async (req: Request, res: Response) => {
  const authenticatedUserId: number = parseInt(res.locals.UserId);
  const contactId: number = parseInt(req.params.id);

  const contact: TContact = await retrieveContactService(
    authenticatedUserId,
    contactId
  );
  return res.json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const authenticatedUserId: number = parseInt(res.locals.UserId);
  const contactId: number = parseInt(req.params.id);
  const newData: TContactUpdate = req.body;

  const user: TContact = await updateContactService(
    authenticatedUserId,
    contactId,
    newData
  );

  return res.json(user);
};

const deleteContactController = async (req: Request, res: Response) => {
  const authenticatedUserId: number = parseInt(res.locals.UserId);
  const contactId: number = parseInt(req.params.id);

  await deleteContactService(authenticatedUserId, contactId);

  return res.status(204).send();
};

export {
  createContactController,
  listContactController,
  retrieveContactController,
  updateContactController,
  deleteContactController,
};
