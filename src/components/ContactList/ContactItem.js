const Contact = ({id, name, number, deleteContact}) => {
    // const {name, number}= contacts
    return(<li key={id}>
        <p>{name} {number}</p>
        <button type = "button" onClick={() => deleteContact(id)}>Delete</button>
        
        </li>)
}

export default Contact
