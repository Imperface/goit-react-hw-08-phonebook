// import component
import { ContactAddForm, ContactsList, Loader, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectContactsIsLoading } from 'redux/contacts/selectors';

// import styled component
import { AppWrapper } from './App.styled';

export const App = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  return (
    <AppWrapper>
      <Section title="Phonebook" className="phonebook">
        {isLoading && <Loader />}
        <div className="contentWrapper">
          <ContactAddForm />
          <ContactsList />
        </div>
      </Section>
    </AppWrapper>
  );
};
