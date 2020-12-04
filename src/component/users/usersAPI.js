import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    changeTerm,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleLoadingStatus
} from '../../redux/usersReducer';
import Users from './Users';
import Spinner from '../common/spinner';
import {usersApi} from "../../api/api";

class UsersAPI extends Component {

    static propTypes = {
        usersData: PropTypes.array,
        changeTerm: PropTypes.func,
        term: PropTypes.any,
        follow: PropTypes.func,
        setUsers: PropTypes.func,
        totalUsersCount: PropTypes.number,
        pageSize: PropTypes.number,
        currentPage: PropTypes.number,
        setTotalUsersCount: PropTypes.func,
        setCurrentPage: PropTypes.func,
        isLoading: PropTypes.bool,
        toggleLoadingStatus: PropTypes.func,
        followingInProgress: PropTypes.array,
        toggleFollowingProgress: PropTypes.func
    };

    componentDidMount() {
        const {setUsers, setTotalUsersCount, currentPage, pageSize, toggleLoadingStatus} = this.props;
        toggleLoadingStatus();
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                setTotalUsersCount(data.totalCount);
                setUsers(data.items);
                toggleLoadingStatus();
            });
    }

    onChangeTerm = (e) => {
        const value = e.target.value;
        this.props.changeTerm(value);
    };

    onPageChanged = (i) => {
        const {setCurrentPage, setUsers, toggleLoadingStatus, pageSize} = this.props;
        setCurrentPage(i);
        toggleLoadingStatus();
        usersApi.getUsers(i, pageSize)
            .then(data => {
                setUsers(data.items);
                toggleLoadingStatus();
            });
    };

    render() {
        const {usersData, follow, term, totalUsersCount, pageSize, currentPage, isLoading, followingInProgress, toggleFollowingProgress} = this.props;
        return (
            <>
                {isLoading
                    ? <Spinner/>
                    : <Users
                        usersData={usersData}
                        onFollowClick={follow}
                        term={term}
                        totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onChangeTerm={this.onChangeTerm}
                        onPageChanged={this.onPageChanged}
                        followingInProgress={followingInProgress}
                        toggleFollowingProgress={toggleFollowingProgress}
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
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleLoadingStatus,
    toggleFollowingProgress
})(UsersAPI);