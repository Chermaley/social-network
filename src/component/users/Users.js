import React from 'react';
import classes from './users.module.scss';
import User from './user';
import userPhoto from '../../assets/img/avatar.png';
import PropTypes from 'prop-types';
import {usersApi} from "../../api/api";


const Users = (props) => {
    const {
        usersData,
        onFollowClick,
        term,
        totalUsersCount,
        pageSize,
        currentPage,
        onChangeTerm,
        onPageChanged,
        followingInProgress,
        toggleFollowingProgress
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
            onFollowClick={() => {
                toggleFollowingProgress(id, true);
                if (!followed) {
                    usersApi.followUser(id)
                        .then(res => {
                            if (res.data.resultCode === 0) {
                                onFollowClick(id);
                                toggleFollowingProgress(id, false);
                            }
                        });
                }  else {
                    usersApi.unFollowUser(id)
                        .then(res => {
                            if (res.data.resultCode === 0) {
                                onFollowClick(id);
                                toggleFollowingProgress(id, false);
                            }
                        });
                }


            }}
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
    onFollowClick: PropTypes.func,
    term: PropTypes.any,
    totalUsersCount: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onChangeTerm: PropTypes.func,
    onPageChanged: PropTypes.func,
    followingInProgress: PropTypes.array,
    toggleFollowingProgress: PropTypes.func
};
export default Users;