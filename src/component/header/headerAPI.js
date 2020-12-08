import React, {Component} from 'react';
import Header from './header';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from "../../redux/authReducer";
class HeaderAPI extends Component {

    static propTypes = {
        setAuth: PropTypes.func,
        isAuth: PropTypes.bool,
        login: PropTypes.any,
        logout: PropTypes.func
    };

    render() {
        const {isAuth, login, logout} = this.props;
        return (
            <Header {...this.props} logout={logout} isAuth={isAuth} login={login}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};


export default connect(mapStateToProps, {logout})(HeaderAPI);