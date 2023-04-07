import { useSelector } from "react-redux";
import * as selectors from "redux/selectors";
import { Contacts } from "./ContactList.styled";
import ContactListItem from 'components/ContactListItem';


export default function ContactList() {
    const items = useSelector(selectors.getContacts);
    const filter = useSelector(selectors.getFilter);

    const getFilteredContacts = () => {
        const toLowerFilter = filter.toLocaleLowerCase();
        return items.filter(item => item.name.toLocaleLowerCase().includes(toLowerFilter));
    };

    const filteredContacts = getFilteredContacts();

    return (
        <Contacts>
            {filteredContacts.length > 0 ? (
                filteredContacts.map(contact => (
                    <ContactListItem key={contact.id} contact={contact}/>
                ))
            ) : (
                    <div style={{color: 'red',fontSize: '20px'}}>
                        no match found
                    </div>
            )}
        </Contacts>
    );
}