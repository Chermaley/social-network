import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    followUser,
    requestUsers,
    unFollowUser,
    actions
} from '../../redux/usersReducer';
import Users from './Users';

import {
    getCurrentPage,
    getIsFollowingInProgress,
    getIsLoadingStatus,
    getPageSize,
    getTerm,
    getTotalUsersCount, getUsers
} from "../../redux/userSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from 'redux';


type MapDispatchToPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void,
    changeTerm: (value: string) => void,
    setCurrentPage: (pageNumber: number) => void,
    followUser: (id: number) => void,
    unFollowUser: (id: number) => void,
}

type MapStateToPropsType = {
    usersData: Array<UserType>,
    term: string,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isLoading: boolean,
    followingInProgress: Array<number>,
}

type OwnProps = {

}
type PropType = MapDispatchToPropsType & MapStateToPropsType;

class UsersAPI extends Component<PropType> {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onChangeTerm = (e: any) => {
        const value = e.target.value;
        this.props.changeTerm(value);
    };

    onPageChanged = (pageNumber: number) => {
        const {pageSize, requestUsers, setCurrentPage} = this.props;
        setCurrentPage(pageNumber);
        requestUsers(pageNumber, pageSize);

    };

    render() {
        const {usersData, followUser, unFollowUser, term, totalUsersCount, pageSize, currentPage, isLoading, followingInProgress} = this.props;
        return (
            <>
                <Users
                    isLoading={isLoading}
                    usersData={usersData}
                    term={term}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onChangeTerm={this.onChangeTerm}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={followingInProgress}
                    followUser={followUser}
                    unFollowUser={unFollowUser}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersData: getUsers(state),
        term: getTerm(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoadingStatus(state),
        followingInProgress: getIsFollowingInProgress(state)
    };
};

const {changeTerm, setCurrentPage} = actions;

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        requestUsers,
        followUser,
        unFollowUser,
        changeTerm,
        setCurrentPage,
    })
)(UsersAPI);
