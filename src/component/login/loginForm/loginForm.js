import React from "react";
import {Field, reduxForm} from "redux-form";
import PropTypes from "prop-types";
import {Input} from "../../common/formsControl/formControls";
import {requiredField} from "../../../utils/validators";
import classes from '../../common/formsControl/formControls.module.scss';

const LoginForm = (props) => {
    const {error} = props;
    const summaryError = error ? <div className={classes.summaryError}>{error}</div> : null;
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[requiredField]} type="text" name={'email'} placeholder={'login'} component={Input}/>
            </div>
            <div><Field validate={[requiredField]} type="password" name={'password'} placeholder={'password'}
                        component={Input}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={Input}/>remember me</div>
            {summaryError}
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;