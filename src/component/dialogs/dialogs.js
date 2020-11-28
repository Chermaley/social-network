import React from 'react';
import classes from './dialogs.module.scss';
import Dialog from "./dialogItem/dialog";
import Message from "./message";

const Dialogs = () => {
    const dialogsData = [
        {person: 'Andrey', id: 1},
        {person: 'Sergey', id: 2},
    ];
    const messagesData = [
        {id: 1, message:'hey'},
        {id: 2, message:'lol'},
    ];

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
                {messages}
            </div>
        </div>
    );
};


export default Dialogs;