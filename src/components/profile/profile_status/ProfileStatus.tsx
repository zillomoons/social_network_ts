import React, {ChangeEvent, useEffect, useState, KeyboardEvent} from "react";
import s from '../Profile.module.css'
import {MdEdit} from "react-icons/all";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatus = React.memo(({status, updateStatus, isOwner}: PropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [lStatus, setStatus] = useState('');

    useEffect(() => {
        setStatus(status);
    }, [status]);

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) =>{
        if (e.key === 'Enter'){
            deactivateEditMode();
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(lStatus);
    }
    const activateEditMode = () => {
        setEditMode(true);
        setStatus(status);
    }
    return editMode
        ? <input onChange={onChangeStatus} onKeyPress={onKeyPressHandler} onBlur={deactivateEditMode} value={lStatus} autoFocus/>
        : <>
            <span>{status || 'Sorry, no status :('}</span>
            {isOwner && <button className={s.statusEditBtn} onClick={activateEditMode}><MdEdit /></button>}
        </>

});

// export class ProfileStatus2 extends React.Component<PropsType, any> {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
//         this.setState({status: e.currentTarget.value});
//     }
//     deactivateEditMode = () => {
//         this.setState({editMode: false});
//         this.props.updateStatus(this.state.status);
//     }
//     activateEditMode = () => {
//         this.setState({editMode: true});
//     }
//
//     componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({status: this.props.status})
//         }
//         console.log('componentDidUpdate')
//     }
//
//     render() {
//         return this.state.editMode
//             ?
//             <input onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} value={this.state.status} autoFocus/>
//             : <span
//                 onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'Sorry, no status :('}</span>
//     }
//
// }