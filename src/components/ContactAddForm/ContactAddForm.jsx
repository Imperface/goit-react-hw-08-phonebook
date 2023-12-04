import { Button, Error, Input } from 'components';

import {
  selectContacts,
  SelectContactsError,
  selectContactsIsLoadingAdd,
} from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { setFilter } from 'redux/filter/slice';

import { ContactAddFormWrapper } from './ContactAddForm.styled';

import { checkDublicateValue } from 'utils/checkDublicateValue';

import { GoPersonAdd } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';

import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

export const ContactAddForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoadingAdd);
  const error = useSelector(SelectContactsError);

  const onFormSubmit = async e => {
    e.preventDefault();

    // get form data
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

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
