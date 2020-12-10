import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    changeTerm,
    follow, followUser,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress, unFollowUser
} from '../../redux/usersReducer';
import Users from './Users';

import {
    // getUsers,
    getCurrentPage,
    getIsFollowingInProgress,
    getIsLoadingStatus,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/userSelectors";

class UsersAPI extends Component {

    static propTypes = {
        usersData: PropTypes.array,
        changeTerm: PropTypes.func,
        term: PropTypes.any,
        totalUsersCount: PropTypes.number,
        pageSize: PropTypes.number,
        currentPage: PropTypes.number,
        setCurrentPage: PropTypes.func,
        isLoading: PropTypes.bool,
        followingInProgress: PropTypes.array,
        requestUsers: PropTypes.func,
        followUser: PropTypes.func,
        unFollowUser: PropTypes.func
    };

    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onChangeTerm = (e) => {
        const value = e.target.value;
        this.props.changeTerm(value);
    };

    onPageChanged = (pageNumber) => {
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

const mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        term: state.usersPage.term,
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoadingStatus(state),
        followingInProgress: getIsFollowingInProgress(state)
    };
};

export default connect(mapStateToProps, {
    changeTerm,
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
    followUser,
    unFollowUser,
})(UsersAPI);