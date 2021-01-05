import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIsSending, getMessages, getPageSize, getTotalMessagesCount} from "../../redux/dialogsSelector";
import {useParams} from "react-router-dom";
import {
    actions,
    getMessagesFromApi,
    loadPreviousMessagesPage,
    sendMessage
} from "../../redux/dialogsReducer";
import {reset} from "redux-form";
import classes from "./dialogs.module.scss";
import {DialogsFormValuesType} from "./dialogs";
import Message from "./message";
import DialogsFormRedux from './dialogsForm';

export const MessagesPage: React.FC = () => {
    const messagesData = useSelector(getMessages);
    const isSending = useSelector(getIsSending);
    const pageSize = useSelector(getPageSize);
    const totalCount = useSelector(getTotalMessagesCount);
    const {id} = useParams<any>();

    const dispatch = useDispatch();

    const fakeScrollDiv = useRef<HTMLDivElement>(null);
    const firstMessage = useRef<HTMLDivElement>(null);

    let showMoreButton;

    useEffect(() => {
        return () => {
            dispatch(actions.setMessages([]));
        };
    }, []);

    useEffect(() => {
        if (id) {
            dispatch(getMessagesFromApi(id, 1));
            dispatch(actions.setCurrentPage(1));
        }
    }, [id]);

    const sendMessagePromise = (id: number, message: string): any => {
        return dispatch(sendMessage(id, message));
    };

    const loadPrevMessagePromise = (id: number): any => {
        return dispatch(loadPreviousMessagesPage(id));
    };

    const addMessage = (value: DialogsFormValuesType) => {
        const message = value.newMessageText;
        if (message) {
            sendMessagePromise(id, message).then(() => {
                scrollToBottom(fakeScrollDiv);
            });
            dispatch(reset('addMessageForm'));
        }
    };

    const getMoreMessages = () => {
        loadPrevMessagePromise(id).then(() => {
            const message = firstMessage.current;
            if (message !== null && message.parentElement !== null) {
                message.parentElement.scrollTop = message.offsetTop;
            }
        });
    };

    const messages = messagesData.map((m, index) => {
        const reference = index === 0 ? firstMessage : null;
        return <Message key={m.id} message={m} reference={reference}/>;
    });

    if (totalCount) {
        showMoreButton = id && (totalCount > pageSize);
    }


    return (
        <div className={classes.messagesContainer}>
             <div className={classes.messages}>
                 {showMoreButton ? <button onClick={getMoreMessages}>more</button> : null}
                {messages}
                <div ref={fakeScrollDiv}/>
            </div>
            <DialogsFormRedux onSubmit={addMessage} isSending={isSending} id={id}/>
        </div>
    );
};

function scrollToBottom (ref: any | null) {
    const div = ref.current;
    if (div !== null && div.parentElement !== null) {
        div.parentElement.scrollTop = div.offsetTop;
    }
}