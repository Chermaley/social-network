// import classes from "./profileInfo/profileInfo.module.scss";
import React from "react";
import PropTypes from "prop-types";
import {Field, Form, reduxForm} from "redux-form";
import {Input, Textarea} from "../common/formsControl/formControls";
import {requiredField} from "../../utils/validators";

const ProfileDataForm = ({handleSubmit}) => {
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div>FullName: <Field name={'fullName'} placeholder={"Your full name"} validate={[requiredField]}
                                      component={Input}/></div>
                <div>About me: <Field name={'aboutMe'} placeholder={"About me"} component={Input}/></div>
                <div>looking for a job: <Field name={'lookingForAJob'} component={Input} type={'checkbox'}/></div>
                <div>My professional skills: <Field name={'lookingForAJobDescription'}
                                                    placeholder={'Your professional skills ?'} component={Textarea}/>
                </div>
                <button>Save</button>
            </Form>
        </>
    );
};

ProfileDataForm.propTypes = {
    fullName: PropTypes.string,
    aboutMe: PropTypes.string,
    lookingForAJob: PropTypes.string,
    lookingForAJobDescription: PropTypes.string,
    contactsList: PropTypes.array,
    toggleEditMode: PropTypes.func,
    handleSubmit: PropTypes.func
};

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataReduxForm;