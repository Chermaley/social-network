import React from "react";
import LoginReduxForm from "./loginForm";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe} = formData;
        login(email, password, rememberMe);
    };
    if (isAuth) return <Redirect to={'/profile'}/>;
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};
export default connect(mapStateToProps ,{login})(Login);