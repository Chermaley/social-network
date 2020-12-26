import React from 'react';
import classes from './dialogs.module.scss';
import Dialog from './dialogItem/dialog';
import Message from './message';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../redux/dialogsReducer";

import DialogsFormRedux from "./dialogsForm";

import {getDialogs, getMessages} from "../../redux/dialogsSelector";

export type DialogsFormValuesType = {
    newMessageText: string,
}

const Dialogs:React.FC = () => {

    const dialogsData = useSelector(getDialogs);
    const messagesData = useSelector(getMessages);
    const dispatch = useDispatch();
    const addMessage = (value: DialogsFormValuesType) => {
        const message = value.newMessageText;
        dispatch(actions.addNewMessage(message));

    };

    const dialogs = dialogsData.map(({id, person}) => {
        return <Dialog key={id} id={id} person={person}/>;
    });

    const messages = messagesData.map(({message,id}) => {
        return <Message id={id} key={id} label={message}/>;
    });

    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogs}
                </div>
                <div className={classes.messagesContainer}>
                    <div className={classes.messages}>{messages}</div>
                    <DialogsFormRedux onSubmit={addMessage}/>
                </div>
            </div>
    );
};



export default Dialogs;

