import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginValidationSchema } from "../../utils/schemas";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    }

    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        dispatch(login(values))
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
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
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


export default LoginForm