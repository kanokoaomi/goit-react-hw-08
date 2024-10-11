import { Formik, Form, Field } from "formik"
import styles from "./ContactForm.module.css"
// import { nanoid } from "nanoid"

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  }

  const handleSubmit = (values, actions) => {
    console.log(values)
    actions.resetForm()
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label}>
          <span>Name:</span>
          <Field
            className={styles.input}
            name='name'
            type='text'
          />
        </label>
        <label className={styles.label}>
          <span>Phone number:</span>
          <Field
            className={styles.input}
            name='number'
            type='text'
          />
        </label>

        <button className={styles.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm