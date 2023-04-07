import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { Contact, Container, ContactNumber, ContactName } from "./ContactListItem.styled";
import * as contactsOperations from 'redux/operations';
import DeleteButton from 'components/DeleteButton';

export default function ContactListItem({ contact: { id, name, number } }) {
    const dispatch = useDispatch();

    return (
        <Contact>
            <>
                <Container>
                    <ContactName>{name}</ContactName>
                </Container>
                <Container>
                    <ContactNumber>{number}</ContactNumber>
                </Container>
            </>
            <DeleteButton
                type="button"
                aria-label="delete contact"
                onClick={() => dispatch(contactsOperations.deleteContact({id, name}))}
            >
                Delete
            </DeleteButton>
        </Contact>
    );
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};