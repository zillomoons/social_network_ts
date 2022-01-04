import {Field, Form, Formik, FormikHelpers, useFormik} from "formik";
import React from "react";
import {FilterType} from "../../redux/users-reducer/usersReducer";
import {TextField, MenuItem, Button} from "@mui/material";

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

export const SearchForm = React.memo(({onFilterChanged}: PropsType) => {
    const formik = useFormik({
        initialValues: {
            term: '',
            friend: "null"
        },
        onSubmit: (values, actions) => {
            const filter: FilterType = {
                term: values.term,
                friend: values.friend === 'null' ? null : values.friend === 'true'
            }
            onFilterChanged(filter);
            actions.setSubmitting(false);
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                name='term'
                size='small'
                value={formik.values.term}
                onChange={formik.handleChange}
            />
            <TextField name='friend'
                       size='small'
                       value={formik.values.friend}
                       onChange={formik.handleChange}
                       select
            >
                <MenuItem value='null'>All</MenuItem>
                <MenuItem value='true'>Only followed</MenuItem>
                <MenuItem value='false'>Only unfollowed</MenuItem>
            </TextField>
            <Button color='primary'
                    variant='contained'
                    type='submit'
            >
                Search
            </Button>
        </form>
    )
})
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