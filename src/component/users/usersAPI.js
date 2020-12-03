import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    changeTerm,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleLoadingStatus
} from '../../redux/usersReducer';
import axios from 'axios';
import Users from './Users';
import Spinner from '../common/spinner';

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
        toggleLoadingStatus: PropTypes.func
    };

    componentDidMount() {
        const {setUsers, setTotalUsersCount, currentPage, pageSize, toggleLoadingStatus} = this.props;
        toggleLoadingStatus();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                setTotalUsersCount(res.data.totalCount);
                setUsers(res.data.items);
                toggleLoadingStatus();
            });
    }

    onChangeTerm = (e) => {
        const value = e.target.value;
        this.props.changeTerm(value);
    };

    onPageChanged = (i) => {
        const {setCurrentPage, setUsers, toggleLoadingStatus} = this.props;
        setCurrentPage(i);
        toggleLoadingStatus();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${i}&count=${this.props.pageSize}`)
            .then(res => {
                setUsers(res.data.items);
                toggleLoadingStatus();
            });
    };

    render() {
        const {usersData, follow, term, totalUsersCount, pageSize, currentPage, isLoading} = this.props;
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
        isLoading: state.usersPage.isLoading
    };
};


export default connect(mapStateToProps, {
    changeTerm,
    follow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    toggleLoadingStatus
})(UsersAPI);