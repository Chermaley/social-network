import React from "react";
import LoginReduxForm from "./loginForm";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from './login.module.scss';
import {getCaptcha, getIsAuth} from "../../redux/authSelectors";
import {login} from "../../redux/authReducer";

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

export const Login: React.FC = () => {

    const captcha = useSelector(getCaptcha);
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();


    const onSubmit = (formData: LoginFormValuesType) => {
        const {email, password, rememberMe, captcha} = formData;
        dispatch(login(email, password, rememberMe, captcha));
    };


    if (isAuth) return <Redirect to={'/profile'}/>;

    return (
        <div className={classes.login}>
            <LoginReduxForm captcha={captcha} onSubmit={onSubmit}/>
            <div className={classes.descr}>
                <p>Welcome to the mashroom</p>
                <ul>
                    <li>Communication</li>
                    <li>News</li>
                    <li>Self-expression</li>
                </ul>
            </div>
        </div>
    );
};


