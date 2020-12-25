import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControl/formControls";
import {DialogsFormValuesType} from "../dialogs";
import classes from './dialogsForm.module.scss';
import userPhoto from '../../../assets/img/avatar.png';

type PropTypes = {}
const DialogsForm: React.FC<InjectedFormProps<DialogsFormValuesType, PropTypes> & PropTypes> = (props) => {
    return (<div className={classes.wrapper}>
                <div className={classes.photo}><img src={userPhoto} alt="userPhoto"/></div>
                <form className={classes.form} onSubmit={props.handleSubmit}>
                    <Field
                        component={Input}
                        name={'newMessageText'}/>
                        <button/>
                </form>
            </div>

    );
};


export default reduxForm<DialogsFormValuesType>({form: 'addMessageForm'})(DialogsForm);
