import { ErrorMessage, Field, Formik, Form } from "formik"
import { registrationValidationSchema } from "../../utils/schemas"
// import { Form } from "react-router-dom"
import { register } from "../../redux/auth/operations"
import { useDispatch } from "react-redux"


const RegistrationForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        console.log(values)
        actions.resetForm()
    }

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

                <button type="submit">Sign In</button>
            </Form>
        </Formik>
    )
}

export default RegistrationForm