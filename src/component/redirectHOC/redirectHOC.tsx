import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/reduxStore";
type MapPropsType = {
    isAuth: boolean,
}
type MapDispatchType = {}
export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>){

    const WithRedirect: React.FC<MapPropsType & MapDispatchType> = (props) => {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={'/login'}/>;
        return (
            <Component {...restProps as unknown as WCP}/>
        );
    };
    const mapStateToProps = (state: AppStateType): MapPropsType => {
        return {
            isAuth: state.auth.isAuth
        };
    };
    return connect<MapPropsType, MapDispatchType, WCP, AppStateType>(mapStateToProps)(WithRedirect);
}