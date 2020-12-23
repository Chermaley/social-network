import React, {useEffect} from 'react';
import User from './user';
import userPhoto from '../../assets/img/avatar.png';
import Paginator from "./paginator";
import Spinner from "../common/spinner";
// import UsersSearchForm from './usersSearchForm';
import {actions, requestUsers, followUser, unFollowUser} from "../../redux/usersReducer";
import classes from "./users.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getIsFollowingInProgress,
    getIsLoadingStatus,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/userSelectors";

export const Users: React.FC = () => {
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const usersData = useSelector(getUsers);
    const isLoading = useSelector(getIsLoadingStatus);
    const followingInProgress = useSelector(getIsFollowingInProgress);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize));
        return () => {
            dispatch(actions.setFilter({friend: null, term: ''}));
        };
    }, []);

    const onPageChanged = (pageNumber: number) => {
        dispatch(actions.setCurrentPage(pageNumber));
        dispatch(requestUsers(pageNumber, pageSize));
    };


    const followUserClick = (id: number) => {
      dispatch(followUser(id));
    };

    const unFollowUserClick = (id: number) => {
        dispatch(unFollowUser(id));
    };

    const users = usersData.map(({id, name, status, followed, photos}) => {
        return <User
            onFollowClick={() => followed ? unFollowUserClick(id) : followUserClick(id)}
            key={id}
            photoUrl={photos.small ? photos.small : userPhoto}
            followStatus={followed}
            fullName={name}
            status={status}
            id={id}
            followingInProgress={followingInProgress}/>;
    });

    return (
        <div className={classes.users}>
            <div className={classes.usersContainer}>
                {isLoading ? <Spinner/> : users}
                {/*<UsersSearchForm onSubmit={onFilterChanged}/>*/}
                <Paginator totalItemsCount={totalUsersCount}
                           pageSize={pageSize}
                           currentPage={currentPage}
                           onPageChanged={onPageChanged}
                />
            </div>

        </div>
    );
};


