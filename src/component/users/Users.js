import React from 'react';
import classes from './users.module.scss';
import User from './user';
import userPhoto from '../../assets/img/avatar.png';
import PropTypes from 'prop-types';



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

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pagesBtn = [];
    for (let i = 1; i <= pagesCount; i++) {
        const className = currentPage === i ? classes.selectedPage : '';
        const btn = <span
            key={i}
            className={className}
            onClick={() => onPageChanged(i)}
        >{i}</span>;
        pagesBtn.push(btn);
    }

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
            <div>
                {pagesBtn}
            </div>
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