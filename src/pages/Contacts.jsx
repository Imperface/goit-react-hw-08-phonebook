import { ContactAddForm, ContactsList } from 'components';

import { fetchContacts } from 'redux/contacts/operations';

import { ContactsWrapper } from './Contacts.styled';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsWrapper>
      <ContactAddForm />
      <ContactsList />
    </ContactsWrapper>
  );
};
