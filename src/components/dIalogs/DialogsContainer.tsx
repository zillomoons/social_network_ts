import {removeMessage, sendMessage} from "../../redux/dialogs-reducer/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {RedirectHOC} from "../../hoc/redirectHOC";
import { compose } from "redux";

const mapState = (state: RootState) => ({
    dialogsPage: state.dialogsPage,
})

export default compose<React.ComponentType>(
    connect(mapState, {sendMessage, removeMessage}),
    RedirectHOC,
    )(Dialogs);

// const AuthRedirect = RedirectHOC(Dialogs);
//
// export const DialogsContainer = connect(mapState, {sendMessage, updateMessage})(AuthRedirect);

