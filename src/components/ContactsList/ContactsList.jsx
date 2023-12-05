import { ContactItem, Notification, Filter, Error, Loader } from 'components';

import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoadingAll,
  selectContactsOperation,
} from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactsListWrapper } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import {
  DELETE_CONTACT,
  FETCH_CONTACTS,
  LOGIN,
  REFRESH,
  REGISTER,
} from 'constans/operationType';
import { clearContactsOperation } from 'redux/contacts/slice';
import { selectAuthOperation } from 'redux/auth/selectors';

export const ContactsList = () => {
  const [filteredContacts, setFilteredContacts] = useState([]);

  const dispatch = useDispatch();

  const error = useSelector(selectContactsError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectContactsIsLoadingAll);

  const contactsOperation = useSelector(selectContactsOperation);
  const authOperation = useSelector(selectAuthOperation);

  useEffect(() => {
    if (authOperation === (LOGIN || REGISTER || REFRESH)) {
      dispatch(fetchContacts());
    }
  }, [dispatch, authOperation]);

  useEffect(() => {
    if (contactsOperation === DELETE_CONTACT) {
      Notify.warning('Contact deleted');
      dispatch(clearContactsOperation());
    }
  }, [contactsOperation, dispatch]);

  useEffect(() => {
    // if filter === null set filteredContacts from contacts
    if (!filter) {
      setFilteredContacts(contacts);
      return;
    }

    //  filtration contacts and set filteredContacts
    const newContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );

    setFilteredContacts(newContacts);
  }, [filter, contacts]);

  useEffect(() => {
    if (contactsOperation === FETCH_CONTACTS) {
      if (contacts.length > 0) {
        Notify.success(
          `Contacts loaded successfully. Amount: ${contacts.length}.`
        );
      } else {
        Notify.failure('No saved contacts found.');
      }
      dispatch(clearContactsOperation());
    }
  }, [dispatch, contactsOperation, contacts]);

  return (
    <ContactsListWrapper>
      <h2>Contacts</h2>

      {!error && !isLoading && contacts.length === 0 && <Notification />}

      {!error && contacts.length > 0 && <Filter />}

      {!error && isLoading && <Loader size={54} color="white" />}

      {!error &&
        !isLoading &&
        contacts.length > 0 &&
        (filteredContacts.length > 0 ? (
          <ul>
            {filteredContacts.map(item => (
              <ContactItem
                key={item.id}
                name={item.name}
                number={item.number}
                id={item.id}
              />
            ))}
          </ul>
        ) : (
          <p className="notFoundRequest">
            Nothing was found in your contact list by <b>{filter}</b>.
          </p>
        ))}

      {error && <Error text={error} />}
    </ContactsListWrapper>
  );
};
