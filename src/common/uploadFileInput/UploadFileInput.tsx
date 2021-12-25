import React, {ChangeEvent} from "react";
import s from './UploadFileInput.module.css'
import {MdAddAPhoto} from "react-icons/all";

type PropsType = {
    savePhoto: (photo: File) => void
}

export const UploadFileInput = React.memo(({savePhoto}: PropsType) => {
    const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        let files: any = e.target.files
        if (files.length) {
            savePhoto(files[0]);
        }
    }
    return (
        <label htmlFor='file-upload' className={s.customFileUpload}>
            <MdAddAPhoto />
            <input type='file' id='file-upload' onChange={uploadPhoto}/>
        </label>
    )
})