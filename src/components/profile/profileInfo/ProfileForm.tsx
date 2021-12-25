import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import s from '../Profile.module.css';
import { ProfileType, UpdateProfileType} from "../../../redux/profile-reducer/profileReducer";
import {Preloader} from "../../../common/preloader/preloader";
import React from "react";

const validateURL = (url: string) => {
    let error;
    const urlregex = new RegExp('^(?:https?://|s?ftps?://)?(?!www | www\\.)[A-Za-z0-9_-]+\\.+[A-Za-z0-9.\\/%&=\\?_:;-]+$')
    if (!urlregex.test(url)){
        error = "Invalid url";
    }
    return error;
}

export const ProfileForm = ({deactivateEditMode, updateProfileData, profile}: FormPropsType) => {
    if (!profile){
        return <Preloader/>
    }
    const {photos, ...model} = profile;
    const initialValues: MyFormValuesType = { ...model, general: '' }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={ async (values, actions) => {
                const { general, ...model } = values;
                await updateProfileData(model, actions.setFieldError).then(() => {
                    deactivateEditMode();
                })
            }}
            validationSchema={Yup.object({
                aboutMe: Yup.string().required('Required'),
                fullName: Yup.string().required('Required'),
            })}
        >
            <Form className={s.profileForm}>
                <button type='submit'>Submit</button>
                <button onClick={deactivateEditMode}>Cancel</button>
                <div className={s.errorMessage}><ErrorMessage name='general' /></div>
                <Field name='fullName' placeholder='Name'/>
                <div className={s.errorMessage}><ErrorMessage name='fullName' /></div>
                <Field name='aboutMe' placeholder='About me'/>
                <div className={s.errorMessage}><ErrorMessage name='aboutMe' /></div>
                <Field type='checkbox' name='lookingForAJob'/><label htmlFor="lookingForAJob">Looking for a job</label>
                <Field name='lookingForAJobDescription' component='textarea' placeholder='Skills'/>
                {
                    Object.keys(profile.contacts).map(media=>{
                    return <div key={media}>
                        <Field name={'contacts.' + media} placeholder={media} validate={validateURL}/>
                        <div className={s.errorMessage}><ErrorMessage name={'contacts.' + media} /></div>
                    </div>
                })
                }
            </Form>
        </Formik>
    )
}


type FormPropsType = {
    deactivateEditMode: () => void
    updateProfileData: (model: UpdateProfileType,setFieldError: (field: string, message: (string | undefined)) => void) => Promise<any>
    profile: ProfileType | null
}
type MyFormValuesType = UpdateProfileType & { general: string}
