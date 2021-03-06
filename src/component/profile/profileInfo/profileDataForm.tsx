// import classes from "./profileInfo/profileInfo.module.scss";
import React from "react";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControl/formControls";
import {requiredField} from "../../../utils/validators";
import classes from "../../common/formsControl/formControls.module.scss";
import {ProfileType} from "../../../types/types";

type PropTypes = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropTypes> & PropTypes> = ({handleSubmit, profile, error}) => {

    const summaryError = error ? <div className={classes.summaryError}>{error}</div> : null;

    const contactsInput = Object.keys(profile.contacts).map((key) => {
        return <div key={key}>{key} <Field name={`contacts.${key}`} component={Input}/></div>;
    });


    return (
        <>
            <Form onSubmit={handleSubmit} className={classes.input}>
                <div>FullName: <Field name={'fullName'} placeholder={"Your full name"} validate={[requiredField]}
                                      component={Input}/></div>
                <div>About me: <Field name={'aboutMe'} placeholder={"About me"} component={Input}/></div>
                {contactsInput}
                <div>{summaryError}</div>
                <button>Save</button>
            </Form>
        </>
    );
};


const ProfileDataReduxForm = reduxForm<ProfileType, PropTypes>({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataReduxForm;