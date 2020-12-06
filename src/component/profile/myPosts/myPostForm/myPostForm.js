import React from "react";
import {Field, reduxForm} from "redux-form";
import * as PropTypes from "prop-types";
import {maxLengthCreator, requiredField} from "../../../../utils/validators";
import {Textarea} from "../../../common/formsControl/formControls";

const maxLength10 = maxLengthCreator(10);

function MyPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter your post text'} validate={[requiredField, maxLength10]} name={"postText"} component={Textarea}/>
            <button>Add post</button>
        </form>);
}

MyPostForm.propTypes = {handleSubmit: PropTypes.func};

const MyPostFormRedux = reduxForm({form: 'postForm'})(MyPostForm);
export default MyPostFormRedux;
