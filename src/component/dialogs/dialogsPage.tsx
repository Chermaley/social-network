import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDialogs} from "../../redux/dialogsSelector";
import {getDialogsFromApi} from "../../redux/dialogsReducer";
import Dialog from "./dialogItem/dialog";
import classes from "./dialogs.module.scss";


export const DialogsPage: React.FC = () => {
    const dialogsData = useSelector(getDialogs);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getDialogsFromApi());
    },[]);

    const dialogs = dialogsData.map(({id, userName, photos}) => {
        return <Dialog key={id} id={id} person={userName} photos={photos}/>;
    });

    return (
        <div className={classes.dialogsItems}>
            {dialogs}
        </div>
    );
};
