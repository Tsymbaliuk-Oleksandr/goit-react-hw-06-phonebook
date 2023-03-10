import { Box } from 'components/Box';
import { ContactItem } from 'components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, getContacts, getFilter } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(removeContact({ id }));
  };

  return (
    <Box display="flex" flexDirection="column" p="0px" as="ul">
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </Box>
  );
};

export default ContactList;
