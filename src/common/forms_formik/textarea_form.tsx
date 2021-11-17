import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import * as Yup from 'yup';
import style from './textarea_form.module.css';

type PropsType = {
    addCallback: (text: string) => void
    styleObject: string // style.addForm
    buttonName: string
}
type FormValues = {
    text: string
}

const AddTextSchema = Yup.object().shape({
    text: Yup.string().max(50, 'Too Long!')
})

export const TextareaForm = React.memo(({ addCallback, buttonName, styleObject }: PropsType) => {
    const submit = (values: FormValues, actions: FormikHelpers<{ text: string; }>) => {
        addCallback(values.text);
        actions.resetForm({
            values: {
                text: ''
            }
        })
    }
    return (
        <Formik
            initialValues={{text: ''}}
            onSubmit={submit}
            validationSchema={AddTextSchema}
        >
            {({errors}) => (
                <Form className={styleObject}>
                    <Field name='text' placeholder={'Write here...'}
                           component='textarea'
                           className={errors.text && style.errorTextarea}
                    />
                    {errors.text ? <div className={style.errorMessage}>{errors.text}</div> : null}
                    <button type='submit'>{buttonName}</button>
                </Form>
            )}
        </Formik>
    )
})