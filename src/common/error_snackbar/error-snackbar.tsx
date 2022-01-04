import React from "react";
import MuiAlert, {AlertProps} from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {useDispatch, useSelector} from "react-redux";
import {setAppError} from "../../redux/app-reducer/appReducer";
import {RootState} from "../../redux/redux_store";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackBar = () => {
    const error = useSelector<RootState, string | null>(state => state.app.error);
    const dispatch = useDispatch();
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppError(null));
    };
    return (
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {error}
            </Alert>
        </Snackbar>
    )
}