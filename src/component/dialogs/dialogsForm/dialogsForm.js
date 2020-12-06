import React from "react";
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import {Textarea} from "../../common/formsControl/formControls";
import {requiredField} from "../../../utils/validators";
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newMessageText'}
                validate={[requiredField]}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};
DialogsForm.propTypes = {handleSubmit: PropTypes.func};
const DialogsFormRedux = reduxForm({form: 'addMessageForm'})(DialogsForm);
export default DialogsFormRedux;
