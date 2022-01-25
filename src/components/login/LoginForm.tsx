import {Field, Form, Formik, ErrorMessage} from "formik";
import s from './Login.module.css';
import * as Yup from 'yup';

interface MyFormValues {
    email: string
    password: string
    rememberMe: boolean
    general: string
    captcha: string | null
}

interface FormProps {
    login: (email: string, password: string,
            rememberMe: boolean,
            setFieldError: (field: string, message: (string | undefined)) => void,
            captcha?: string | null ) => void

    captcha: string | null
}

const validateCaptcha = (value: string) => {
    let errorMessage;
    if (!value) {
        errorMessage = 'Captcha is required';
    }
    return errorMessage;
};

export const LoginForm = ({login, captcha}: FormProps) => {
    const initialValues: MyFormValues = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: null,
        general: ''
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                const {email, password, rememberMe, captcha} = values;
                login(email, password, rememberMe, actions.setFieldError, captcha);
            }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Email is required'),
                password: Yup.string().required('Password is required')
            })}
        >
            <Form className={s.form}>
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
                <label htmlFor='rememberMe'>
                    <Field type='checkbox' name='rememberMe' id='rememberMe'/>
                    <span style={{marginLeft: '8px'}}>remember me</span>
                </label>
                {
                    captcha && <div className={s.captcha}>
                        <img src={captcha} alt='catcha'/>
                        <Field name='captcha' validate={validateCaptcha}/>
                        <div className={s.errorMessage}>
                            <ErrorMessage name='captcha'/>
                        </div>
                    </div>
                }
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