// import component
import { ContactItem, Notification, Filter } from 'components';

// import selector, actioinCreator, operation
import { selectContacts, SelectContactsError } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { fetchContacts } from 'redux/contacts/operations';

// import styled component
import { ContactsListWrapper } from './ContactsList.styled';

// other import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const ContactsList = () => {
  const error = useSelector(SelectContactsError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [filteredContacts, setFilteredContacts] = useState([]);

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
      {/* if contact null show no contact found */}
      {!error && contacts.length === 0 && <Notification />}

      {/* if contacts true, show filter and list */}
      {!error && contacts.length > 0 && <Filter />}

      {!error &&
        contacts.length > 0 &&
        // if filtered data true and length > 0 show contact list
        // if filtered data false show: no contacts by filter value

        (filteredContacts.length > 0 ? (
          <ul>
            {filteredContacts.map(item => (
              <ContactItem
                key={item.id}
                name={item.name}
                phone={item.phone}
                id={item.id}
              />
            ))}
          </ul>
        ) : (
          <p>
            Nothing was found in your contact list by <b>{filter}</b>.
          </p>
        ))}
      {error && <p>{error}</p>}
    </ContactsListWrapper>
  );
};
