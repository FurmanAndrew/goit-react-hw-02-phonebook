import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './FormPhonebook.module.css';
 
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



const FormPhonebook = ({addContact}) => {
    return(<>
    <Formik
        initialValues={{ name: '', number: '' }}
        validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            } else if (
                !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.name)
            ) {
              errors.name = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
            }
            if (!values.number) {
                errors.number = 'Required';
              } else if (
                !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(values.number)
              ) {
                errors.number = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";
              }
            return errors;
          }}
        onSubmit = {values => console.log(values)}>
        <Form className={css.fopmPhonebook}>
          <label htmlFor='name' className={css.labelPhonebook}>
            Name
            <Field
            type="text"
            name="name"
            />
            <ErrorMessage name="name" component="div" />
            </label>
            <label htmlFor='number' className={css.labelPhonebook}>
              Number
            <Field
            type="tel"
            name="number"
            />
            <ErrorMessage name="number" component="div" />
            </label>
            <button type="submit" className={css.buttonPhonebook} onClick={addContact}>
             Add contact
           </button>
        </Form>
    </Formik>
    </>)
}

export default FormPhonebook
