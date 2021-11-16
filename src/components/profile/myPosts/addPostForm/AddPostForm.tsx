import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import s from "../MyPosts.module.css";

type PropsType = {
    addPost: () => void
    updatePost: (newText: string) => void
}
type FormValues = {
    newPostText: string
}

export const AddPostForm = React.memo(({addPost, updatePost}: PropsType) => {
    const submit = (values: FormValues, actions: FormikHelpers<{ newPostText: string; }>) => {
        updatePost(values.newPostText);
        addPost();
        actions.resetForm({
            values: {
                newPostText: ''
            }
        })
    }
    return (
        <Formik
            initialValues={{newPostText: ''}}
            onSubmit={submit}>
            <Form className={s.addNewPost}>
                <Field name='newPostText'
                       placeholder={'Write a post'}
                       component='textarea'/>
                <button>Add post</button>
            </Form>
        </Formik>
    )
})