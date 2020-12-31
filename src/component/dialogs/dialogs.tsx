/* eslint-disable */
import React, {useEffect} from 'react';
import classes from './dialogs.module.scss';
import Dialog from './dialogItem/dialog';
import Message from './message';
import {useDispatch, useSelector} from "react-redux";
import {actions, getDialogsFromApi, getMessagesFromApi, sendMessage} from "../../redux/dialogsReducer";

import DialogsFormRedux from "./dialogsForm";

import {getDialogs, getMessages} from "../../redux/dialogsSelector";
import {useParams} from 'react-router-dom';
import {number} from "prop-types";
import Spinner from "../common/spinner/spinner";

export type DialogsFormValuesType = {
    newMessageText: string,
}

const Dialogs:React.FC = () => {

    const dialogsData = useSelector(getDialogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDialogsFromApi());
    },[]);



    const dialogs = dialogsData.map(({id, userName, photos}) => {
        return <Dialog key={id} id={id} person={userName} photos={photos}/>;
    });


    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogs}
                </div>
                <MessagesPage />
            </div>
    );
};


const MessagesPage: React.FC = () => {
    const messagesData = useSelector(getMessages);
    const {id} = useParams<any>();
    const dispatch = useDispatch();


    useEffect(() => {
        if (id) {
            dispatch(getMessagesFromApi(id));
        }
    }, [id]);

    const addMessage = (value: DialogsFormValuesType) => {
        const message = value.newMessageText;
        dispatch(sendMessage(id, message));
    };

    const messages = messagesData.map(({body,id}) => {
        return <Message  key={id} label={body}/>;
    });

    return (
        <div className={classes.messagesContainer}>
            <div className={classes.messages}>{messages}</div>
            <DialogsFormRedux onSubmit={addMessage}/>
        </div>
    );
};

export default Dialogs;

