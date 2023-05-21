import { Component } from 'react';
import FormPhonebook from './FormPhonebook/FormPhonebook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: '',
  filter: '',
  }

  addContact = (date) => {
    this.setState(prevState => {
      const names = []

      prevState.contacts.map(contact => {
       return names.push(contact.name)
      })

      if (names.includes(date.name)) {
        return alert(`${date.name} is already in contacts`)
      }
      
      return { contacts: [date, ...prevState.contacts]}
    })  
  }

  deleteContact = (id) => {
    this.setState ((prevState) => ({ 
      // console.log(prevState.contacts.filter(contact => contact.id !== id))
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  onchangeFilterContact = (e) => {
    this.setState( {filter: e.currentTarget.value})
  };

  filter = () => {
    const assa = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(assa))
  }

  render (){
  

  return (
    <div
    style={{
      height: '5000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}
    >
      React homework template
      <h1>Phonebook</h1>
      <FormPhonebook addContact={this.addContact}></FormPhonebook>
      <Filter search={this.state.filter} onChange = {this.onchangeFilterContact}></Filter>
      <h2>Contacts</h2>
      <ContactList contacts={this.filter()} deleteContact = {this.deleteContact}></ContactList>
    </div>
  );
};
}

export  {App} 
