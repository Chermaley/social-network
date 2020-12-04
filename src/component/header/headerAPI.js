import React, {Component} from 'react';
import Header from './header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer';
import PropTypes from 'prop-types';
class HeaderAPI extends Component {

    static propTypes = {
        setAuthUserData: PropTypes.func,
        isAuth: PropTypes.bool,
        login: PropTypes.any
    };

    componentDidMount() {
        const {setAuthUserData} = this.props;
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    const {id, login, email} = res.data.data;
                    setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        const {isAuth, login} = this.props;
        return (
            <Header {...this.props} isAuth={isAuth} login={login}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};


export default connect(mapStateToProps, {setAuthUserData})(HeaderAPI);