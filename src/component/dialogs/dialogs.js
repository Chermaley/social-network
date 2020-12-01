import React from 'react';
import classes from './dialogs.module.scss';
import Dialog from './dialogItem/dialog';
import Message from './message';
import PropTypes from 'prop-types';

const Dialogs = ({dialogsData, messagesData, newMessageText, onMessageChange, addMessage}) => {



    const onChange = (e) => {
        const text = e.target.value;
        onMessageChange(text);
    };

    const sendClick = () => {
        addMessage();
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
                <div><textarea onChange={onChange} value={newMessageText}/></div>
                <div>
                    <button onClick={sendClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

Dialogs.propTypes = {
    dialogsData: PropTypes.array,
    messagesData: PropTypes.array,
    newMessageText: PropTypes.any,
    onMessageChange: PropTypes.func,
    addMessage: PropTypes.func
};

export default Dialogs;