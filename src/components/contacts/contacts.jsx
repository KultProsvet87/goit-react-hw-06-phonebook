import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/reducers/contactsReducer';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state);
  const { filter } = useSelector(state => state);

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {filtredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button
              type="button"
              onClick={() => dispatch(delContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
