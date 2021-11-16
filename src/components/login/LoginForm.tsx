import {Field, Form, FormikErrors, FormikProps, withFormik} from "formik";
import s from './Login.module.css';
import {FaUser} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';

interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {touched, errors, isSubmitting, message} = props;
    return (
        <div className={s.screen}>
            <div className={s.screenContent}>
                <Form className={s.login}>
                    <h1>{message}</h1>
                    <div className={s.loginField}>
                        <i className={s.loginIcon}><FaUser /></i>
                        <Field type='email' name='email' className={s.loginInput}/>
                        {touched.email && errors.email && <div>{errors.email}</div>}
                    </div>

                    <div className={s.loginField}>
                        <i className={s.loginIcon}><FaLock /></i>
                        <Field type='password' name='password' className={s.loginInput}/>
                        {touched.password && errors.password && <div>{errors.password}</div>}
                    </div>
                    <Field type='checkbox' name='rememberMe' id='rememberMe' />
                    <label htmlFor='rememberMe'>remember me</label>

                    <button type='submit' disabled={isSubmitting} className={s.loginSubmit}>
                        log in now
                    </button>
                </Form>
            </div>
        </div>

    )
}

interface MyFormProps {
    initialEmail?: string;
    message: string;
}

export const LoginForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => {
        return {
            email: props.initialEmail || '',
            password: '',
        };
    },
    validate: (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    },
    handleSubmit: values => {
        alert(values.email );
        //do submitting things
    },
})(InnerForm);