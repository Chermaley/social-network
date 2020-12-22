import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    followUser,
    requestUsers,
    unFollowUser,
    actions, FilterFormType
} from '../../redux/usersReducer';
import Users from './Users';

import {
    getCurrentPage,
    getFilter,
    getIsFollowingInProgress,
    getIsLoadingStatus,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/userSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";
import {compose} from 'redux';



type MapDispatchToPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    followUser: (id: number) => void,
    unFollowUser: (id: number) => void,
    setFilter: (data: FilterFormType) => void
}

type MapStateToPropsType = {
    usersData: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isLoading: boolean,
    followingInProgress: Array<number>,
    filter: FilterFormType
}

type OwnProps = {

}
type PropType = MapDispatchToPropsType & MapStateToPropsType;

class UsersAPI extends Component<PropType> {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props;
        requestUsers(currentPage, pageSize);
    }

    componentWillUnmount() {
        this.props.setFilter(this.props.filter);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, requestUsers, setCurrentPage} = this.props;
        setCurrentPage(pageNumber);
        requestUsers(pageNumber, pageSize);

    };

    onFilterChanged = (filter: FilterFormType) => {
        const {setFilter, requestUsers, pageSize} = this.props;
        setFilter(filter);
        requestUsers(1, pageSize);
    };

    render() {
        const {usersData, followUser, unFollowUser, totalUsersCount, pageSize, currentPage, isLoading, followingInProgress} = this.props;
        return (
            <>
                <Users
                    onFilterChanged={this.onFilterChanged}
                    isLoading={isLoading}
                    usersData={usersData}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
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
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoadingStatus(state),
        followingInProgress: getIsFollowingInProgress(state),
        filter: getFilter(state)
    };
};

const {setCurrentPage, setFilter} = actions;

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {
        requestUsers,
        followUser,
        unFollowUser,
        setCurrentPage,
        setFilter
    })
)(UsersAPI);
