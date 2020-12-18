import React from "react";
import LoginReduxForm from "./loginForm";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {reset} from "redux-form";
import {AppStateType} from "../../redux/reduxStore";

type MapStateToPropsType = {
    captcha: string | null,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

const Login: React.FC<LoginPropsType> = ({login, isAuth, captcha}) => {

    const onSubmit = (formData: LoginFormValuesType, dispatch: any) => {
        dispatch(reset("login"));
        const {email, password, rememberMe, captcha} = formData;
        login(email, password, rememberMe, captcha);
    };

    if (isAuth) return <Redirect to={'/profile'}/>;

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captcha={captcha} onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    };
};
export default connect(mapStateToProps ,{login})(Login);