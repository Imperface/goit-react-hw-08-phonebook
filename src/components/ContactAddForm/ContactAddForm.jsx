// import component
import { Button, Input } from 'components';

// import selector, async thunk,  actionCreator
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { setFilter } from 'redux/filter/slice';

// import styled component
import { ContactAddFormWrapper } from './ContactAddForm.styled';

// import utils
import { checkDublicateValue } from 'utils/checkDublicateValue';

// import icon
import { GoPersonAdd } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';

// other import
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

export const ContactAddForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onFormSubmit = e => {
    e.preventDefault();

    // get form data
    const form = e.target;
    const inputName = form.elements.name;
    const inputPhone = form.elements.phone;
    let nameValue = inputName.value.trim();
    let phoneValue = inputPhone.value.trim();

    // if one of the fields is empty, return
    if (!nameValue || !phoneValue) {
      Notify.failure('The Name and Phone must be filled.');
      return;
    }

    const check = checkDublicateValue(contacts, 'name', nameValue);

    // create new contact
    const newContact = { name: nameValue, phone: phoneValue };

    // check dublicate name
    if (check) {
      Notify.failure(
        `The contact with name: ${nameValue} has already been added.`
      );
      return;
    }
    Notify.success(`The contact with name: ${nameValue} successfully added.`);

    // sending the payload
    dispatch(addContact(newContact));

    // clear filter input
    dispatch(setFilter(''));

    inputName.value = '';
    inputPhone.value = '';
  };

  return (
    <ContactAddFormWrapper>
      <form onSubmit={onFormSubmit}>
        <h2>Add contact</h2>
        <Input
          type="text"
          name="name"
          icon={() => <FaRegUser />}
          placeholder={'Alfred'}
        />
        <Input
          type="tel"
          name="phone"
          icon={() => <BsTelephone />}
          placeholder={'+380000000000'}
        />
        <Button type="submit" text="Add contact" icon={() => <GoPersonAdd />} />
      </form>
    </ContactAddFormWrapper>
  );
};
