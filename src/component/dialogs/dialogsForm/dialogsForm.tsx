import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControl/formControls";
import {DialogsFormValuesType} from "../dialogs";
import classes from './dialogsForm.module.scss';

type PropTypes = { id: number, isSending: boolean}
const DialogsForm: React.FC<InjectedFormProps<DialogsFormValuesType, PropTypes> & PropTypes> = ({id, handleSubmit,isSending}) => {
    return (
        <div className={classes.wrapper}>
            {id ? <form className={classes.form} onSubmit={handleSubmit}>
                <Field
                    component={Input}
                    name={'newMessageText'}/>
                <button disabled={isSending}/>
            </form> : null}
        </div>

    );
};


export default reduxForm<DialogsFormValuesType, PropTypes>({form: 'addMessageForm'})(DialogsForm);
