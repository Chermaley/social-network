import React from "react";
import LoginReduxForm from "./loginForm";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {reset} from "redux-form";
// eslint-disable-next-line react/prop-types
const Login = ({login, isAuth, captcha}) => {
    const onSubmit = (formData, dispatch) => {
        dispatch(reset("login"));
        const {email, password, rememberMe, captcha = null} = formData;
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
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    };
};
export default connect(mapStateToProps ,{login})(Login);