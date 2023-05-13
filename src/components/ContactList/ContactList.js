import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import Contact from './ContactItem'

const ContactList = ({contacts, deleteContact}) => {
    // const {name, number}= contacts
    return(<div>
        <h2>Contacts</h2>
        <ul>{contacts.map(contact => {return (<Contact key={contacts.id} id={contacts.id}  name = {contact.name} number={contact.number} deleteContact={deleteContact}></Contact>)})}</ul>
    </div>
        
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func
}
export default ContactList