import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import {FilterType} from "../../redux/usersReducer";



type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
const usersSearchFormValidate = () => {
    const errors = {}
    return errors;
}
type FormType = {
    term: string,
    friend: 'true' | 'false' | 'null'
}

export const UsersSearchForm = React.memo((props: PropsType) => {
    const initialValues: FormType = {term: '', friend: "null"};
    const submit = (values: FormType, actions: FormikHelpers<FormType>) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter);
        actions.setSubmitting(false);
    }
    return (
        <Formik
            initialValues={initialValues}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            <Form>
                <Field type='text' name="term"/>
                <Field name='friend' as='select'>
                    <option value="null">All</option>
                    <option value="true">Only followed</option>
                    <option value="false">Only unfollowed</option>
                </Field>
                <button type="submit">Find</button>
            </Form>
        </Formik>
    )
})