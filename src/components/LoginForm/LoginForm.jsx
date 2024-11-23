import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginValidationSchema } from "../../utils/schemas";
import { login } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUserisLoading } from "../../redux/auth/selectors";

import styles from "../RegistrationForm/RegistrationForm.module.css"
import Loading from "../Loading";

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

    const isLoading = useSelector(selectUserisLoading)
    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <label className={styles.label}>
                    <span className={styles.spanForName}>Email:</span>
                    <Field
                        className={styles.input}
                        name='email'
                        type='email'
                    />
                    <ErrorMessage name='email' component='span' />
                </label>
                <label className={styles.label}>
                    <span className={styles.spanForName}>Password:</span>
                    <Field
                        className={styles.input}
                        name='password'
                        type='password'
                    />
                    <ErrorMessage name='password' component='span' />
                </label>

                <button className={styles.button} type="submit">Log In</button>
            </Form>
        </Formik>
    )
}


export default LoginForm