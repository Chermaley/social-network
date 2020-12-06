import React from 'react';
import classes from './dialogs.module.scss';
import Dialog from './dialogItem/dialog';
import Message from './message';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {addNewMessage} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../redirectHOC/redirectHOC";
import {compose} from "redux";
import DialogsFormRedux from "./dialogsForm";


const Dialogs = ({dialogsData, messagesData, addNewMessage}) => {

    const addMessage = (value) => {
        const message = value.newMessageText;
        addNewMessage(message);
    };

    const dialogs = dialogsData.map(({id, person}) => {
        return <Dialog key={id} id={id} person={person}/>;
    });

    const messages = messagesData.map(({message,id}) => {
        return <Message key={id} label={message}/>;
    });

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                <div>{messages}</div>
                <DialogsFormRedux onSubmit={addMessage}/>
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    dialogsData: PropTypes.array,
    messagesData: PropTypes.array,
    addNewMessage: PropTypes.func,
};

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages
    };
};

export default compose(withAuthRedirect, connect(mapStateToProps, {addNewMessage})) (Dialogs);