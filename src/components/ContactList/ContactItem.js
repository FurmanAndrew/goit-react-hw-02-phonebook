import PropTypes from 'prop-types';

const Contact = ({id, name, number, deleteContact}) => {
    // const {name, number}= contacts
    return(<li key={id}>
        <p>{name} {number}</p>
        <button type = "button" onClick={() => deleteContact(id)}>Delete</button>
        
        </li>)
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
}
export default Contact
