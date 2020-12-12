import React from 'react';
import User from './user';
import userPhoto from '../../assets/img/avatar.png';
import Paginator from "./paginator";
import Spinner from "../common/spinner";
import {UserType} from "../../types/types";

type PropsType = {
    usersData: Array<UserType>,
    term: string,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onChangeTerm: (e: any) => void,
    onPageChanged: (pageNumber: number) => void,
    followingInProgress: Array<number>,
    followUser: (id: number) => void,
    unFollowUser: (id: number) => void,
    isLoading: boolean
}

const Users: React.FC<PropsType> = (props) => {
    const {
        usersData, term, totalUsersCount,
        pageSize, currentPage, onChangeTerm,
        onPageChanged, followingInProgress,
        followUser, unFollowUser, isLoading
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
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
            />

            <textarea onChange={onChangeTerm} value={term}/>
            {isLoading ? <Spinner/> : users}
        </div>
    );
};


export default Users;