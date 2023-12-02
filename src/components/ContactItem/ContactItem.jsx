// import component
import { Button } from 'components';

// import async thunk
import { deleteContact } from 'redux/contacts/operations';
import { selectContactsIsLoading } from 'redux/contacts/selectors';

// import styled component
import { ContactItemWrapper } from './ContactItem.styled';

// import icon
import { RiDeleteBin6Line } from 'react-icons/ri';

// other import
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';

export const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const onBtnClick = () => {
    dispatch(deleteContact(id));
    Notify.success(`The contact ${name} successfully deleted.`);
  };
  return (
    <ContactItemWrapper>
      <div>
        <p>
          <b>{name}</b>
        </p>
        <p>{phone}</p>
      </div>
      <Button
        text="Delete"
        type="button"
        deleteContact={onBtnClick}
        isLoading={isLoading}
        icon={() => <RiDeleteBin6Line />}
      />
    </ContactItemWrapper>
  );
};
