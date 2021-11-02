import {sendMessage, updateMessage} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {RedirectHOC} from "../../hoc/redirectHOC";

const mapState = (state: RootState) => ({
    dialogsPage: state.dialogsPage,
})

const AuthRedirect = RedirectHOC(Dialogs);

export const DialogsContainer = connect(mapState, {sendMessage, updateMessage})(AuthRedirect);

