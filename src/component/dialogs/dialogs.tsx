import React from 'react';
import classes from './dialogs.module.scss';
import {DialogsPage} from './dialogsPage';
import {MessagesPage} from './messagesPage';

export type DialogsFormValuesType = {
    newMessageText: string
}

const Dialogs:React.FC = () => {
    return (
            <div className={classes.dialogs}>
                <DialogsPage/>
                <MessagesPage/>
            </div>
    );
};

export default Dialogs;

