import React from 'react';
import User from './user';
import userPhoto from '../../assets/img/avatar.png';
import Paginator from "./paginator";
import Spinner from "../common/spinner";
import {UserType} from "../../types/types";

import UsersSearchForm from './usersSearchForm';
import {FilterFormType} from "../../redux/usersReducer";


type PropsType = {
    usersData: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    followingInProgress: Array<number>,
    followUser: (id: number) => void,
    unFollowUser: (id: number) => void,
    isLoading: boolean,
    onFilterChanged: (data: FilterFormType) => void
}

const Users: React.FC<PropsType> = (props) => {
    const {
        usersData, totalUsersCount,
        pageSize, currentPage,
        onPageChanged, followingInProgress,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        followUser, unFollowUser, isLoading, onFilterChanged
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
            <UsersSearchForm onSubmit={onFilterChanged}/>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
            />
            {isLoading ? <Spinner/> : users}
        </div>
    );
};


export default Users;