import React, {ChangeEvent, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = React.memo(({status, updateStatus}: PropsType) => {
    const [editMode, setEditMode] = useState(false);
    const [lStatus, setStatus] = useState('');
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
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
        ? <input onChange={onChangeStatus} onBlur={deactivateEditMode} value={lStatus} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{status ? status : 'Sorry, no status :('}</span>
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