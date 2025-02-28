import { useState } from 'react'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import './App.css'

const people = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  const [contacts, setContacts] = useState(people)
  const [filteredContacts, setFilteredContacts] = useState(people)

  const addContact = (name, number) => {
    const newContact = {
      id: Date.now().toString(), 
      name,
      number,
    };
    setContacts((prev) => [...prev, newContact]);
    setFilteredContacts((prev) => [...prev, newContact]);
  };
  
  const handleDeleteContacts = (contactId) => {
    setContacts((prev) => prev.filter((person) => person.id !== contactId));
    setFilteredContacts((prev) => prev.filter((person) => person.id !== contactId)); // Обновляем отфильтрованные контакты при удалении
  };

  const handleSearch = (searchQuery) => {
    if (!searchQuery) {
      setFilteredContacts(contacts); c
    } else {
      setFilteredContacts(
        contacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact}/>
        <SearchBox handleSearch={handleSearch}/>
        <ContactList people={filteredContacts} handleDeleteContacts={handleDeleteContacts} /> {/* Передаём filteredContacts */}
      </div>
    </>
  );
}

export default App;
