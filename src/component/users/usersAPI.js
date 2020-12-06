import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    changeTerm,
    follow, followUser,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unFollowUser
} from '../../redux/usersReducer';
import Users from './Users';
import Spinner from '../common/spinner';

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
        getUsers: PropTypes.func,
        followUser: PropTypes.func,
        unFollowUser: PropTypes.func
    };

    componentDidMount() {
        const {currentPage, pageSize, getUsers} = this.props;
        getUsers(currentPage, pageSize);
    }

    onChangeTerm = (e) => {
        const value = e.target.value;
        this.props.changeTerm(value);
    };

    onPageChanged = (pageNumber) => {
        const {pageSize, getUsers, setCurrentPage} = this.props;
        setCurrentPage(pageNumber);
        getUsers(pageNumber, pageSize);

    };

    render() {
        const {usersData, followUser, unFollowUser, term, totalUsersCount, pageSize, currentPage, isLoading, followingInProgress} = this.props;
        return (
            <>
                {isLoading
                    ? <Spinner/>
                    : <Users
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
                    />}

            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.users,
        term: state.usersPage.term,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    };
};


export default connect(mapStateToProps, {
    changeTerm,
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    followUser,
    unFollowUser,
})(UsersAPI);