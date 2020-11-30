import React from 'react';
import classes from './dialogs.module.scss';
import Dialog from './dialogItem/dialog';
import Message from './message';
import PropTypes from 'prop-types';
import {addMessageActionCreator, updateNewMessage} from "../../redux/dialogsReducer";

const Dialogs = ({state, dispatch}) => {

    const {dialogs: dialogsData, messages: messagesData, newMessageText} = state;

    const onMessageChange = (e) => {
        const text = e.target.value;
        dispatch(updateNewMessage(text));
    };

    const addMessage = () => {
        dispatch(addMessageActionCreator());
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
                <div><textarea onChange={onMessageChange}  value={newMessageText}/></div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func
}

export default Dialogs;