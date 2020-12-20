import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";

type MapDispatchType = {
    logout: () => void
}
type MapStateProps = ReturnType<typeof mapStateToProps>
type PropTypes = MapStateProps & MapDispatchType

const HeaderAPI: React.FC<PropTypes> = (props) => {
    const {isAuth, login, logout} = props;
    return (
        <Header {...props} logout={logout} isAuth={isAuth} login={login}/>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};


export default connect<MapStateProps, MapDispatchType, {}, AppStateType>(mapStateToProps, {logout})(HeaderAPI);