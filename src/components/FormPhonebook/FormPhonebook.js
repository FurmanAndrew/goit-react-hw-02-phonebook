import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
// const validationSchema = (values) => {
//     const errors = {};
//     if (!values.name) {
//       errors.name = 'Required';
//     } else if (
//         "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$".test(values.name)
//     ) {
//       errors.name = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
//     }
//     if (!values.number) {
//         errors.number = 'Required';
//       } else if (
//         "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}".test(values.number)
//       ) {
//         errors.number = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";
//       }
//     return errors;
//   }




const FormPhonebook = (addContact) => {
    return(<><h1>Phonebook</h1>
    <Formik
        initialValues={{ name: '', number: '' }}
        validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            } else if (
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$".test(values.name)
            ) {
              errors.name = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
            }
            if (!values.number) {
                errors.number = 'Required';
              } else if (
                "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}".test(values.number)
              ) {
                errors.number = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";
              }
            return errors;
          }}
        onSubmit = {(values) => console.log(values)}>
        <Form>
            <Field
            type="text"
            name="name"
            />
            <ErrorMessage name="name" component="div" />
            <Field
            type="tel"
            name="number"
            />
            <ErrorMessage name="number" component="div" />
            <button type="submit" >
             Add contact
           </button>
        </Form>
    </Formik>
    </>)
}


export default FormPhonebook