import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectContactsFilter,
} from '../../redux/contacts/selectors';
import { IoPersonOutline } from 'react-icons/io5';

import {
  ContactsList,
  ContactItem,
  ContactIcon,
  ContactText,
  ContactDelete,
} from './ContactList.styled';


export function ContactList() {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();


  const dispatch = useDispatch();

  const handleDelete = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <ContactsList>
      {visibilityContacts.map(contact => (
        <ContactItem key={contact.id}>
          <ContactIcon>
            <IoPersonOutline />
          </ContactIcon>
          <ContactText>
            {contact.name}: <span>{contact.number}</span>
          </ContactText>
          <ContactDelete type="button" id={contact.id} onClick={handleDelete}>
         Delete
          </ContactDelete>
        </ContactItem>
      ))}
    </ContactsList>
  );
}



