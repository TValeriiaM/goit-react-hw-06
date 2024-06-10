import { useId } from 'react';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css'


const addContactValidation = Yup.object().shape({
   name: Yup.string()
     .min(3, 'Too short!')
     .max(50, 'Too long!')
     .required('The field is required'),
   number: Yup.string()
     .matches(/^\d{3}-\d{2}-\d{2}$/, "Please enter valid number: xxx-xx-xx.")
     .required('The field is required'),
 });
  


export default function ContactForm ({ onAdd }) {
  const fieldID = useId();

  const handleSubmit =(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onAdd(newContact);
        actions.resetForm();
      }

    return <Formik
      initialValues={{ name: '', number: ''}}
      onSubmit={handleSubmit}
      validationSchema={addContactValidation}   
    >
         <Form className={css.formcontainer}>
          <label htmlFor={`${fieldID}-name`}>Name
            <Field className={css.forminput} type="text" name="name" id={`${fieldID}-name`} />
            <ErrorMessage className={css.attention} name="name" component="div" />
          </label>
          
          <label htmlFor={`${fieldID}-number`}>Number
            <Field className={css.forminput} type="tel" name="number" id={`${fieldID}-number`} />
            <ErrorMessage className={css.attention} name="number" component="div" />
          </label>
          
           <button className={css.addButton} type="submit"  >
             Add Contact
           </button>
        </Form>
      
     </Formik>
   
 }