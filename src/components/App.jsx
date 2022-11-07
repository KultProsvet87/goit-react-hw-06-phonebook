import { useState, useEffect } from 'react';

import { ContactForm } from './contactForm/contactForm';
import { Contacts } from './contacts/contacts';
import { Filter } from './filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmite = newContact => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert('This contact already added');
      return;
    }
    setContacts(prev => {
      return [...prev, newContact];
    });
  };

  const delContact = contactID => {
    setContacts(prev => [...prev.filter(contact => contact.id !== contactID)]);
  };
  return (
    <div>
      React homework template
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onFormSubmite} />
      <Filter FilterValue={filter} onFilterChange={setFilter} />
      <Contacts contacts={contacts} filter={filter} delContact={delContact} />
    </div>
  );
};
