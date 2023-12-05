import { Button, Error, Input } from 'components';

import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoadingAdd,
  selectContactsOperation,
} from 'redux/contacts/selectors';
import { clearContactsOperation } from 'redux/contacts/slice';
import { setFilter } from 'redux/filter/slice';
import { addContact } from 'redux/contacts/operations';

import { ContactAddFormWrapper } from './ContactAddForm.styled';

import { checkDublicateValue } from 'utils/checkDublicateValue';

import { GoPersonAdd } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';

import { ADD_CONTACT } from 'constans/operationType';

import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

export const ContactAddForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoadingAdd);
  const error = useSelector(selectContactsError);
  const operation = useSelector(selectContactsOperation);

  const formRef = useRef(null);
  const newContactName = useRef('');

  useEffect(() => {
    if (operation === ADD_CONTACT) {
      Notify.success(
        `The contact ${newContactName.current} successfully added.`
      );

      // reset form
      formRef.current.reset();

      // clean contact operation
      dispatch(clearContactsOperation());
    }
  }, [operation, dispatch]);

  const onFormSubmit = e => {
    e.preventDefault();

    // get form data
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    // save form ref in useRef
    formRef.current = form;

    // check form data
    if (!name || !number) {
      Notify.failure('The Name and Number must be filled.');
      return;
    }

    // check dublicate name
    const check = checkDublicateValue(contacts, 'name', name);
    if (check) {
      Notify.failure(`The contact with name: ${name} has already been added.`);
      return;
    }

    // save new contact name in useRef
    newContactName.current = name;

    // create new contact
    const newContact = { name, number };

    dispatch(addContact(newContact));
    dispatch(setFilter(''));
  };

  return (
    <ContactAddFormWrapper>
      <form onSubmit={onFormSubmit}>
        <h2>Add contact</h2>
        {error && <Error text={error} />}
        <Input
          type="text"
          name="name"
          minLength={2}
          icon={() => <FaRegUser />}
          placeholder={'Alfred'}
        />
        <Input
          type="tel"
          name="number"
          minLength={6}
          icon={() => <BsTelephone />}
          placeholder={'+380000000000'}
        />
        <Button
          type="submit"
          text="Add contact"
          icon={() => <GoPersonAdd />}
          isLoading={isLoading}
        />
      </form>
    </ContactAddFormWrapper>
  );
};
