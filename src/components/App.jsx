import { ContactForm } from './contactForm/contactForm';
import { Contacts } from './contacts/contacts';
import { Filter } from './filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <Contacts />
    </div>
  );
};
