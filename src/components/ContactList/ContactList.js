import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Contact from './ContactItem';
import css from './ContactList.module.css'

const ContactList = ({contacts, deleteContact}) => {
    // const {name, number}= contacts
    return(<div>
        <ul className={css.contactsList}>{contacts.map(contact => {return (<Contact  key={nanoid()} id={contact.id}  name = {contact.name} number={contact.number} deleteContact={deleteContact}></Contact>)})}</ul>
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
