import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState( {status: e.currentTarget.value});
    }
    deactivateEditMode = () => {
       this.setState( {editMode: false} );
        this.props.updateStatus(this.state.status);
    }
    activateEditMode = () => {
        this.setState( {editMode: true} );
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState( {status: this.props.status} )
        }
        console.log('componentDidUpdate')
    }

    render() {
        return this.state.editMode
            ? <input onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} value={this.state.status} autoFocus/>
            : <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'Sorry, no status :('}</span>
    }

}