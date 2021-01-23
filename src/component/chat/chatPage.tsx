import React, {useEffect, useState} from "react";
import classes from './chatPage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chatReducer";
import {AppStateType} from "../../redux/reduxStore";

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}


const ChatPage: React.FC = () => {
    return (
        <div >
            <Chat/>
        </div>
    );
};

export default ChatPage;


const Chat: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        };
    }, []);

    return (
        <div className={classes.chat}>
            <Messages />
            <AddMessageForm />
        </div>
    );
};

const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);

    return (
        <div className={classes.messages}>
            {messages.map((m, index) => {
                return <Message key={index} message={m} />;
            })}
        </div>
    );
};


const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div className={classes.message}>
            <div className={classes.photo}><img src={message.photo} alt="userPhoto"/></div>
            <div className={classes.text}>{message.message}</div>
        </div>
    );
};

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message));
        setMessage('');
    };
    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message}/>
            </div>
            <div>
                <button onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    );
};