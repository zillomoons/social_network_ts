import {sendMessage} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {RedirectHOC} from "../../hoc/redirectHOC";
import { compose } from "redux";

const mapState = (state: RootState) => ({
    dialogsPage: state.dialogsPage,
})

export default compose<React.ComponentType>(
    connect(mapState, {sendMessage}),
    RedirectHOC,
    )(Dialogs);

// const AuthRedirect = RedirectHOC(Dialogs);
//
// export const DialogsContainer = connect(mapState, {sendMessage, updateMessage})(AuthRedirect);

