 
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './FormPhonebook.module.css';
import PropTypes from 'prop-types';


export class FormPhonebook extends Component {
    state = {
        name: '',
        number: '' 
    }

    inputChange = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {name, number} = this.state

        this.props.addContact({
        id: nanoid(),
        name: name,
        number: number
        })

        this.reset()
    } 

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        const {name, number} = this.state

        return (
            <form onSubmit={this.handleSubmit} className={css.fopmPhonebook}>
                <label htmlFor='name' className={css.labelPhonebook}>
                    Name
                    <input
                        id='name'
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.inputChange} />
                </label>
                <label htmlFor='tel' className={css.labelPhonebook}>
                    Phone
                    <input                 
                        id='tel'
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.inputChange}/>
                </label>
                <button className={css.buttonPhonebook} type='submit'>Add contact</button>
            </form>
    )
    }
    
}

FormPhonebook.propTypes = {
    addContact: PropTypes.func.isRequired
}


// My attempt to solve through the library Formik
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import css from './FormPhonebook.module.css';

// const FormPhonebook = ({addContact}) => {
//     return(<>
//     <Formik
//         initialValues={{ name: '', number: '' }}
//         validate={values => {
//             const errors = {};
//             if (!values.name) {
//               errors.name = 'Required';
//             } else if (
//                 !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.name)
//             ) {
//               errors.name = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
//             }
//             if (!values.number) {
//                 errors.number = 'Required';
//               } else if (
//                 !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(values.number)
//               ) {
//                 errors.number = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";
//               }
//             return errors;
//           }}
//         onSubmit = {(values) => 
//             console.log(addContact({values}))}>
//         <Form className={css.fopmPhonebook}>
//           <label htmlFor='name' className={css.labelPhonebook}>
//             Name
//             <Field
//             type="text"
//             name="name"
//             />
//             <ErrorMessage name="name" component="div" />
//             </label>
//             <label htmlFor='number' className={css.labelPhonebook}>
//               Number
//             <Field
//             type="tel"
//             name="number"
//             />
//             <ErrorMessage name="number" component="div" />
//             </label>
//             <button type="submit" className={css.buttonPhonebook}>
//              Add contact
//            </button>
//         </Form>
//     </Formik>
//     </>)
// }

export default FormPhonebook

