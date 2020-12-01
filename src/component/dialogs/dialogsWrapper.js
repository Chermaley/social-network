import {addMessageActionCreator, updateNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updateNewMessage(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;