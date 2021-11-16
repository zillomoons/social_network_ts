import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";

type PropsType = {
    addCallback: () => void
    updateCallback: (text: string) => void
    styleObject: string // style.addForm
    buttonName: string
}
type FormValues = {
    text: string
}

export const TextareaForm = React.memo(({
                                           addCallback, updateCallback,
                                           buttonName, styleObject
                                       }: PropsType) => {
    const submit = (values: FormValues, actions: FormikHelpers<{ text: string; }>) => {
        updateCallback(values.text);
        addCallback();
        actions.resetForm({
            values: {
                text: ''
            }
        })
    }
    return (
        <Formik
            initialValues={{text: ''}}
            onSubmit={submit}>
            <Form className={styleObject}>
                <Field name='text'
                       placeholder={'Write here...'}
                       component='textarea'/>
                <button>{buttonName}</button>
            </Form>
        </Formik>
    )
})