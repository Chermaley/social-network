import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/formsControl/formControls";
import {requiredField} from "../../../utils/validators";
import classes from '../../common/formsControl/formControls.module.scss';
import {LoginFormValuesType} from "../login";


type LoginFormOwnProps = {captcha: string | null}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({error, captcha, handleSubmit}) => {
    const summaryError = error ? <div className={classes.summaryError}>{error}</div> : null;
    return (
        <form onSubmit={handleSubmit}>
            <div><Field validate={[requiredField]} type="text" name={'email'} placeholder={'login'} component={Input}/>
            </div>
            <div><Field validate={[requiredField]} type="password" name={'password'} placeholder={'password'}
                        component={Input}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={Input}/>remember me</div>
            {summaryError}
            {captcha ?
                <div>
                    <img src={captcha} alt="captcha"/>
                    <Field placeholder={"captcha text"} validate={[requiredField]} type="text" name={"captcha"} component={Input}/>
                </div>
                : null}
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

export default LoginReduxForm;