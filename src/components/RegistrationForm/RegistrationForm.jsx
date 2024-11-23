import { ErrorMessage, Field, Formik, Form } from "formik"
import { registrationValidationSchema } from "../../utils/schemas"
import { register } from "../../redux/auth/operations"
import { useDispatch, useSelector } from "react-redux"
import { selectUserisLoading } from "../../redux/auth/selectors"

import styles from "./RegistrationForm.module.css"
import Loading from "../Loading"


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

    const isLoading = useSelector(selectUserisLoading)
    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registrationValidationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <label className={styles.label}>
                    <span className={styles.spanForName} >Name:</span>
                    <Field
                        className={styles.input}
                        name='name'
                        type='text'
                    />
                    <ErrorMessage name='name' component='span' />
                </label>
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

                <button className={styles.button} type="submit">Sign In</button>
            </Form>
        </Formik>
    )
}

export default RegistrationForm