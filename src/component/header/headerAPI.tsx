import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {actions, FilterFormType, requestUsers} from "../../redux/usersReducer";
import {withRouter} from 'react-router-dom';

type MapDispatchType = {
    logout: () => void,
    setFilter: (filter: FilterFormType) => void,
    requestUsers: (pageSize: number, currentPage: number) => void,
}
type PathParamsType = {
    location: any,
    history: any
}

type MapStateProps = ReturnType<typeof mapStateToProps>
type PropTypes = MapStateProps & MapDispatchType & PathParamsType


const HeaderAPI: React.FC<PropTypes> = (props) => {
    const {isAuth, login, logout, pageSize, setFilter, requestUsers} = props;
    const onFilterChanged = (filter: FilterFormType) => {
        setFilter(filter);
        if(props.location.pathname !== '/users') {
            props.history.push('/users');
        }
        requestUsers(1, pageSize);
    };
    return (
        <Header {...props} onSearchSubmit={onFilterChanged} logout={logout} isAuth={isAuth} login={login}/>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        pageSize: state.usersPage.pageSize
    };
};

const {setFilter} = actions;


export default withRouter(connect<MapStateProps, MapDispatchType, {}, AppStateType>(mapStateToProps, {logout, requestUsers, setFilter})(HeaderAPI));


