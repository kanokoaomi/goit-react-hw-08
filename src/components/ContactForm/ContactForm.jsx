import { Formik, Form, Field, ErrorMessage } from "formik"
import styles from "./ContactForm.module.css"
import { nanoid } from "nanoid"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contacts/operations"
import { contactsValidationSchema } from "../../utils/schemas"

const initialValues = {
  name: '',
  number: '',
}

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    onAddContact(values)
    actions.resetForm()
  }

  const onAddContact = (formData) => {
    const finalContacts = {
      ...formData,
      id: nanoid()
    }
    const action = addContact(finalContacts)
    dispatch(action)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={contactsValidationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label}>
          <span className={styles.spanForName}>Name:</span>
          <Field
            className={styles.input}
            name='name'
            type='text'
          />
          <ErrorMessage name='name' component='span' />
        </label>
        <label className={styles.label}>
          <span className={styles.spanForName}>Phone number:</span>
          <Field
            className={styles.input}
            name='number'
            type='text'
          />
          <ErrorMessage name='number' component='span' />
        </label>

        <button className={styles.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm