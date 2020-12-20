import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/formsControl/formControls";
import {requiredField} from "../../../utils/validators";
import {DialogsFormValuesType} from "../dialogs";


type PropTypes = {}
const DialogsForm: React.FC<InjectedFormProps<DialogsFormValuesType, PropTypes> & PropTypes> = (props) => {
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


export default reduxForm<DialogsFormValuesType>({form: 'addMessageForm'})(DialogsForm);
