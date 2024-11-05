import { Formik, Form, Field, ErrorMessage } from "formik"
import styles from "./ContactForm.module.css"
import * as Yup from "yup"
import { nanoid } from "nanoid"
import { addContact } from "../../redux/contactsSlice"
import { useDispatch } from "react-redux"
// import { nanoid } from "nanoid"

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  }

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
    // setContact((previousListOfContacts) => [...previousListOfContacts, finalContacts])
  }

  const phoneNumberRegex =
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  const validation = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required field"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required field").matches(phoneNumberRegex, "Number must be like: +380*********"),
  })

  return (
    <Formik initialValues={initialValues} validationSchema={validation} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>Name:</span>
          <Field
            className={styles.input}
            name='name'
            type='text'
          />
          <ErrorMessage name='name' component='span' />
        </label>
        <label className={styles.label}>
          <span>Phone number:</span>
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