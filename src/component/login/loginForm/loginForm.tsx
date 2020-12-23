import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControl/formControls";
import {requiredField} from "../../../utils/validators";
import {LoginFormValuesType} from "../login";
import classes from './loginForm.module.scss';

type LoginFormOwnProps = {captcha: string | null}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({error, captcha, handleSubmit}) => {
    const summaryError = error ? <div className={classes.summaryError}>{error}</div> : null;
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.input}>
                <div>Email</div>
                <Field validate={[requiredField]} type="text" name={'email'} placeholder={'login'} component={Input}/>
            </div>
            <div className={classes.input}>
                <div>Password</div>
                <Field validate={[requiredField]} type="password" name={'password'} placeholder={'password'}
                        component={Input}/>
            </div>
            <div className={classes.checkbox}>
                <Field type="checkbox" name={'rememberMe'} component={Input}/>
                <div className={classes.remember}>Remember me</div>
            </div>
            {summaryError}
            {captcha ?
                <div>
                    <img src={captcha} alt="captcha"/>
                    <Field placeholder={"captcha text"} validate={[requiredField]} type="text" name={"captcha"} component={Input}/>
                </div>
                : null}
            <div className={classes.button}>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

export default LoginReduxForm;