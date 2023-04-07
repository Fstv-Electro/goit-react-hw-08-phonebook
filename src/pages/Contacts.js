import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/Contacts/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { getContacts, getLoadStatus } from 'redux/contacts/selectors';
import { Container } from 'components/App/App.styled';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);
  const isLoading = useSelector(getLoadStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && <div>Loading...</div>}
        {!isLoading && items.length === 0 && (
          <div style={{ color: 'red', fontSize: '20px' }}>no contacts</div>
        )}
        {items.length > 0 && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
    </Container>
  );
}
