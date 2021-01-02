import React, {useEffect, useState} from "react";
import classes from './chatPage.module.scss';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}


const ChatPage: React.FC = () => {
    return (
        <Chat/>
    );
};

export default ChatPage;


const Chat: React.FC = () => {

    return (
        <div className={classes.chat}>
            <Messages/>
            <AddMessageForm/>
        </div>
    );
};

const Messages: React.FC = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    const setMessagesFromApi = (e: any) => {
        setMessages(prevState => [...prevState, ...JSON.parse(e.data)]);
    };

    useEffect(() => {
        console.log(1);
        ws.addEventListener('message', setMessagesFromApi);
    }, []);

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
    const sendMessage = () => {
        if (!message) {
            return;
        }
        ws.send(message);
        setMessage('');
    };
    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};