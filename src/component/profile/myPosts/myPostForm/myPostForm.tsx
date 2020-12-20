import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators";
import {Textarea} from "../../../common/formsControl/formControls";
import {MyPostsFormValuesType} from "../myPosts";

const maxLength10 = maxLengthCreator(10);

type PropTypes = {}

const MyPostForm:React.FC<InjectedFormProps<MyPostsFormValuesType, PropTypes> & PropTypes> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter your post text'} validate={[requiredField, maxLength10]} name={"postText"} component={Textarea}/>
            <button>Add post</button>
        </form>);
};

export default reduxForm<MyPostsFormValuesType>({form: 'postForm'})(MyPostForm);
