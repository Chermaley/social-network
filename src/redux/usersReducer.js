import {usersApi} from "../api/api";

const CHANGE_TERM = 'USERS/CHANGE_TERM';
const TOGGLE_FOLLOW = 'USERS/TOGGLE_FOLLOW';
const TOGGLE_LOADING = 'USERS/TOGGLE_LOADING';
const SET_USERS = 'USERS/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
const TOGGLE_FOLLOWING_PROGRESS = 'USERS/TOGGLE_FOLLOWING_PROGRESS';
const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
    term: ''
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: !user.followed};
                    }
                    return user;
                })
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            };
        case CHANGE_TERM:
            return {
                ...state,
                term: action.term
            };
        default:
            return state;
    }
};
export const follow = (id) => ({type: TOGGLE_FOLLOW, id});
export const toggleLoadingStatus = () => ({type: TOGGLE_LOADING});
export const changeTerm = (term) => ({type: CHANGE_TERM, term});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setUsers = (users) => ({type: SET_USERS, users});
export const toggleFollowingProgress = (id, isFetching) => ({type: TOGGLE_FOLLOWING_PROGRESS, id, isFetching});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleLoadingStatus());
    let res = await usersApi.getUsers(currentPage, pageSize);
    dispatch(toggleLoadingStatus());
    dispatch(setTotalUsersCount(res.totalCount));
    dispatch(setUsers(res.items));
};

const followUnfollowFlow = async (dispatch, id, action, apiMethod) => {
    dispatch(toggleFollowingProgress(id, true));
    let res = await apiMethod(id);
    if (res.data.resultCode === 0) {
        dispatch(action(id));
        dispatch(toggleFollowingProgress(id, false));
    }
};

export const followUser = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, follow, usersApi.followUser);
};
export const unFollowUser = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, follow, usersApi.unFollowUser);
};

export default usersReducer;