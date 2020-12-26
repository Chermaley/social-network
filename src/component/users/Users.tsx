/* eslint-disable */
import React, {useEffect} from 'react';
import User from './user';
import userPhoto from '../../assets/img/avatar.png';
import Paginator from "./paginator";
import Spinner from "../common/spinner";
import {actions, requestUsers, followUser, unFollowUser} from "../../redux/usersReducer";
import classes from "./users.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getFilter,
    getIsFollowingInProgress,
    getIsLoadingStatus,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/userSelectors";
import {useHistory} from 'react-router-dom';
import * as queryString from "querystring";

type QueryParamType = { term?: string, friend?: string, page?: string };
export const Users: React.FC = () => {
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const usersData = useSelector(getUsers);
    const isLoading = useSelector(getIsLoadingStatus);
    const followingInProgress = useSelector(getIsFollowingInProgress);
    const filter = useSelector(getFilter);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        //query param initialize
        const parse = queryString.parse(history.location.search.substr(1)) as  QueryParamType;
        let actualFilter = filter;
        let actualPage = currentPage;

        if (parse.page) actualPage = +parse.page;
        if (parse.term) actualFilter = {...actualFilter, term: parse.term as string};
        if (parse.friend) actualFilter = {...actualFilter, friend: parse.friend === 'null' ? null: parse.friend !== 'false'};

        dispatch(actions.setCurrentPage(actualPage));
        dispatch(actions.setFilter(actualFilter));
        dispatch(requestUsers(actualPage, pageSize));
        return () => {
            dispatch(actions.setFilter({term: '', friend: null}))
        }
    }, []);

    useEffect(() => {
        let query: QueryParamType = {};
        if (!!filter.term) query.term = filter.term;
        if (filter.friend !== null) query.friend = String(filter.friend);
        if (currentPage !== 1) query.page = String(currentPage);

        history.push({
            pathname: '/users',
            search: queryString.encode(query)
        });
    }, [filter, currentPage]);

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

    const usersContent = isLoading ? <Spinner/> : users;
    if (usersData.length === 0 && !isLoading) {
        return <div className={classes.users}>
            <div className={classes.notFound}>
                <img src="http://vkclub.su/_data/stickers/gribson/sticker_vk_gribson_019.png" alt="oops"/>
                <p>Sorry users not found</p>
            </div>
        </div>;
    }
    return (
        <div className={classes.users}>
            <>
                <div className={classes.usersContainer}>
                    {usersContent}
                </div>
                <div className={classes.paginator}>
                    <Paginator
                        totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                    />
                </div>
            </>

        </div>
    );
};


