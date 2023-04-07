import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { Contact, Container, ContactNumber, ContactName } from "./ContactListItem.styled";
import * as contactsOperations from 'redux/contacts/operations';
import DeleteButton from 'components/DeleteButton';
import { getLoadStatus } from "redux/contacts/selectors";

export default function ContactListItem({ contact: { id, name, number } }) {
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoadStatus);

    return (
        <Contact>
            <>
                <Container>
                    <ContactName>{name}</ContactName>
                </Container>
            {isLoading ?
                (
                    <ContactNumber>removal process...</ContactNumber>
                ) : (
                    <Container>
                        <ContactNumber>{number}</ContactNumber>
                    </Container>
                )}
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