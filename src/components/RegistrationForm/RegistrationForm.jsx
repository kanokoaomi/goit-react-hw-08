import { ErrorMessage, Field, Formik } from "formik"
import { registrationValidationSchema } from "../../utils/schemas"
import { Form } from "react-router-dom"


const RegistrationForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const handleSubmit = (values, actions) => {
        // onAddContact(values)
        console.log(values)
        actions.resetForm()
    }

    // const onAddContact = (formData) => {
    //     const finalContacts = {
    //         ...formData,
    //     }
    // }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registrationValidationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <label>
                    <span>Name:</span>
                    <Field

                        name='name'
                        type='text'
                    />
                    <ErrorMessage name='name' component='span' />
                </label>
                <label>
                    <span>Email:</span>
                    <Field
                        name='email'
                        type='email'
                    />
                    <ErrorMessage name='email' component='span' />
                </label>
                <label>
                    <span>Password:</span>
                    <Field
                        name='password'
                        type='password'
                    />
                    <ErrorMessage name='password' component='span' />
                </label>

                <button type="submit">Log In</button>
            </Form>
        </Formik>
    )
}

export default RegistrationForm