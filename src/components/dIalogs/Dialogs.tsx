import React from 'react';
import styles from './Dialogs.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import DialogItem from "./dialogItem/dialogItem";
import {Contacts} from "./contacts/contacts";
import {DialogsPageType} from '../../redux/dialogs-reducer/dialogsReducer';
import {TextareaForm} from "../../common/forms_formik/textarea_form";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessage: string) => void
    removeMessage: (id: string) => void
}
export const Dialogs = React.memo(({dialogsPage, sendMessage, removeMessage}: DialogsPagePropsType) => {

    const {dialogItems, contacts} = dialogsPage;
    const mappedDialogItems = dialogItems.map(d => <DialogItem key={d.id} id={d.id}
                                                               removeMessage={removeMessage}
                                                               userImage={d.userImage}
                                                               name={d.name} text={d.text}
                                                               time={d.time}/>);

    return (
        <div className={styleContainer.container}>
            <Contacts contacts={contacts}/>
            <div>
                {mappedDialogItems}
                <TextareaForm addCallback={sendMessage}
                              styleObject={styles.addMessageWrapper}
                              buttonName='Send'/>
            </div>
        </div>
    );
});


