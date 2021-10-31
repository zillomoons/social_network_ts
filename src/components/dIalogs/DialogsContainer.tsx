import { sendMessage, updateMessage} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";


const mapState = (state: RootState) =>({ dialogsPage: state.dialogsPage })

export const DialogsContainer = connect(mapState, {sendMessage, updateMessage})(Dialogs)

