import React, {ComponentType} from 'react';
import classes from './dialogs.module.scss';
import Dialog from './dialogItem/dialog';
import Message from './message';
import {connect} from "react-redux";
import {actions, InitialStateType} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../redirectHOC/redirectHOC";
import {compose} from "redux";
import DialogsFormRedux from "./dialogsForm";
import {AppStateType} from "../../redux/reduxStore";

type PropTypes = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    dialogsData: InitialStateType["dialogs"],
    messagesData:  InitialStateType["messages"],
}
type MapDispatchToPropsType = {
    addNewMessage: (value: string) => void
}
export type DialogsFormValuesType = {
    newMessageText: string,
}

const Dialogs:React.FC<PropTypes> = ({dialogsData, messagesData, addNewMessage}) => {

    const addMessage = (value: DialogsFormValuesType) => {
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

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages
    };
};

export default compose<ComponentType>(withAuthRedirect, connect(mapStateToProps, {...actions})) (Dialogs);

