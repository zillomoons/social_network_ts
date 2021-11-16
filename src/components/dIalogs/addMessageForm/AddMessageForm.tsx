import {Field, Form, Formik, FormikHelpers} from "formik";
import styles from "../Dialogs.module.css";
import React from "react";

type PropsType = {
    sendMessage: () => void
    updateMessage: (newMessage: string) => void
}
type FormValues = {
    newMessageText: string
}

export const AddMessageForm = React.memo(({sendMessage, updateMessage}: PropsType) => {
    const submit = (values: FormValues, actions: FormikHelpers<{ newMessageText: string; }>) => {
        updateMessage(values.newMessageText);
        sendMessage();
        actions.resetForm({
            values: {
                newMessageText: ''
            }
        })
    }
    return (
        <Formik
            initialValues={{newMessageText: ''}}
            onSubmit={submit}>
            <Form className={styles.addMessageWrapper}>
                <Field name='newMessageText'
                       placeholder={'Write a message'}
                       component='textarea'/>
                <button>Send</button>
            </Form>
        </Formik>
    )
})