import React from 'react';
import classes from './users.module.scss';
import User from './user';
import userPhoto from '../../assets/img/avatar.png';
import PropTypes from 'prop-types';
import Paginator from "./paginator";


const Users = (props) => {
    const {
        usersData,
        term,
        totalUsersCount,
        pageSize,
        currentPage,
        onChangeTerm,
        onPageChanged,
        followingInProgress,
        followUser,
        unFollowUser
    } = props;


    const users = usersData.map(({id, name, status, followed, photos}) => {
        return <User
            onFollowClick={() => followed ? unFollowUser(id) : followUser(id)}
            key={id}
            photoUrl={photos.small ? photos.small : userPhoto}
            followStatus={followed}
            fullName={name}
            location={'Russia'}
            status={status}
            id={id}
            followingInProgress={followingInProgress}/>;
    });

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <textarea onChange={onChangeTerm} value={term}/>
            {users}
        </div>
    );
};


Users.propTypes = {
    usersData: PropTypes.array,
    term: PropTypes.any,
    totalUsersCount: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onChangeTerm: PropTypes.func,
    onPageChanged: PropTypes.func,
    followingInProgress: PropTypes.array,
    followUser: PropTypes.func,
    unFollowUser: PropTypes.func
};
export default Users;