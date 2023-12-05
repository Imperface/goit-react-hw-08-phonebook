import { Button } from 'components';

import { deleteContact } from 'redux/contacts/operations';
import {
  selectContactsIsLoadingDelete,
  selectContactsOperation,
} from 'redux/contacts/selectors';

import { RiDeleteBin6Line } from 'react-icons/ri';

import { ContactItemWrapper } from './ContactItem.styled';

import { useDispatch, useSelector } from 'react-redux';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectContactsIsLoadingDelete);

  return (
    <ContactItemWrapper>
      <div>
        <p>
          <b>{name}</b>
        </p>
        <p>{number}</p>
      </div>
      <Button
        text="Delete"
        type="button"
        callback={() => dispatch(deleteContact(id))}
        isLoading={isLoading}
        icon={() => <RiDeleteBin6Line />}
      />
    </ContactItemWrapper>
  );
};
