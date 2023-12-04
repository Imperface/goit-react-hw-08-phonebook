import { ContactItem, Notification, Filter, Error, Loader } from 'components';

import {
  selectContacts,
  SelectContactsError,
  selectContactsIsLoadingAll,
} from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactsListWrapper } from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const ContactsList = () => {
  const [filteredContacts, setFilteredContacts] = useState([]);

  const dispatch = useDispatch();

  const error = useSelector(SelectContactsError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectContactsIsLoadingAll);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
