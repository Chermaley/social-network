import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import React from "react";

export const withAuthRedirect = (Component) => {
    const WithRedirect = ({isAuth, props}) => {
        if (!isAuth) return <Redirect to={'/login'}/>;
        return (
            <Component {...props}/>
        );
    };
    WithRedirect.propTypes = {
        isAuth: PropTypes.bool,
        props: PropTypes.object
    };
    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        };
    };
    return connect(mapStateToProps)(WithRedirect);
};