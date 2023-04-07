import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Title } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/Contacts/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { useEffect } from 'react';
import * as contactsOperations from 'redux/operations';
import * as selectors from 'redux/selectors';


const App = ({title}) => {
  const dispatch = useDispatch();
  const items = useSelector(selectors.getContacts);
  const isLoading = useSelector(selectors.getLoadStatus);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>{title}</Title>
      <Section>
        <ContactForm/>
      </Section>

      <Section title="Contacts">
        {!isLoading && items.length === 0 && (
          <div style={{ color: 'black', fontSize: '20px'}}>U don't have contacts yet!</div>
        )}
        {items.length > 0 && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
      <ToastContainer autoClose={ 3000 } theme={'colored'} />
    </Container>
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string,
};