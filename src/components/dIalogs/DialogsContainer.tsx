import { addMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux_store";

// type DialogsPagePropsType = {
//     dialogsPage: DialogsPageType
//     dispatch: (action: ActionTypes) => void
// }
// export const DialogsContainer = ({dialogsPage, dispatch}: DialogsPagePropsType) => {
//     const onSendMessage = () => dispatch(addMessageAC());
//     const onNewMessageChange = (newMessage: string) => dispatch(updateMessageAC(newMessage))
//
//     return (
//         <Dialogs dialogsPage={dialogsPage} sendMessage={onSendMessage} updateMessage={onNewMessageChange}/>
//     );
// };

const mapState = (state: RootState) =>({
    dialogsPage: state.dialogsPage
})
const mapDispatch = (dispatch: AppDispatch) => ({
    sendMessage: () => dispatch(addMessageAC()),
    updateMessage: (newMessage: string) => dispatch(updateMessageAC(newMessage))
})

export const DialogsContainer = connect(mapState, mapDispatch)(Dialogs)

