import {Field, Form, Formik, ErrorMessage} from "formik";
import s from './Login.module.css';
import * as Yup from 'yup';

interface MyFormValues {
    email: string
    password: string
    rememberMe: boolean
    general: string
}

interface FormProps {
    login: (email: string, password: string, rememberMe: boolean, setFieldError: (field: string, message: (string | undefined)) => void) => void
}

export const LoginForm = ({login}: FormProps) => {
    const initialValues: MyFormValues = {
        email: '',
        password: '',
        rememberMe: false,
        general: ''
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                const {email, password, rememberMe} = values;
                login(email, password, rememberMe, actions.setFieldError);
            }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Email is required'),
                password: Yup.string().required('Password is required'),
            })}
        >
            <Form>
                <h1>Log in</h1>
                <div>
                    <Field type='email' name='email'/>
                    <div className={s.errorMessage}>
                        <ErrorMessage name='email'/>
                    </div>
                </div>
                <div>
                    <Field type='password' name='password'/>
                    <div className={s.errorMessage}>
                        <ErrorMessage name='password'/>
                    </div>
                </div>
                <Field type='checkbox' name='rememberMe' id='rememberMe'/>
                <label htmlFor='rememberMe'>remember me</label>
                <div>
                    <button type='submit'>log in</button>
                    <div className={s.errorMessage}>
                        <ErrorMessage name='general'/>
                    </div>
                </div>
            </Form>
        </Formik>
    )
}