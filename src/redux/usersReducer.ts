import {usersApi} from "../api/api";
import {UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {Dispatch} from "redux";

const CHANGE_TERM = 'USERS/CHANGE_TERM';
const TOGGLE_FOLLOW = 'USERS/TOGGLE_FOLLOW';
const TOGGLE_LOADING = 'USERS/TOGGLE_LOADING';
const SET_USERS = 'USERS/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
const TOGGLE_FOLLOWING_PROGRESS = 'USERS/TOGGLE_FOLLOWING_PROGRESS';

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [] as Array<number>, //array of users ID
    term: ''
};
export type InitialStateType = typeof initialState;

type ActionsType =  FollowActionType | ToggleLoadingStatusActionType |
    ChangeTermActionType | SetTotalUsersCountActionType |
    SetCurrentPageActionType | SetUsersActionType |
    ToggleFollowingInProgressActionType

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

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

type FollowActionType = {
    type: typeof TOGGLE_FOLLOW,
    id: number
}
export const follow = (id: number): FollowActionType => ({type: TOGGLE_FOLLOW, id});

type ToggleLoadingStatusActionType = {
    type: typeof TOGGLE_LOADING
}
export const toggleLoadingStatus = (): ToggleLoadingStatusActionType => ({type: TOGGLE_LOADING});

type ChangeTermActionType = {
    type: typeof CHANGE_TERM,
    term: string
}
export const changeTerm = (term: string): ChangeTermActionType => ({type: CHANGE_TERM, term});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    usersCount: number
}
export const setTotalUsersCount = (usersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    usersCount
});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    pageNumber: number
}
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber});

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});

type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_PROGRESS,
    id: number,
    isFetching: boolean
}
export const toggleFollowingProgress = (id: number, isFetching: boolean): ToggleFollowingInProgressActionType => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    id,
    isFetching
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
type DispatchType = Dispatch<ActionsType>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType =>
                    async (dispatch: DispatchType) => {
    dispatch(toggleLoadingStatus());
    let res = await usersApi.getUsers(currentPage, pageSize);
    dispatch(toggleLoadingStatus());
    dispatch(setTotalUsersCount(res.totalCount));
    dispatch(setUsers(res.items));
};

const _followUnfollowFlow = async (dispatch: DispatchType, id: number, action:(id: number) => FollowActionType, apiMethod: any) => {
    dispatch(toggleFollowingProgress(id, true));
    let res = await apiMethod(id);
    if (res.data.resultCode === 0) {
        dispatch(action(id));
        dispatch(toggleFollowingProgress(id, false));
    }
};

export const followUser = (id: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, id, follow, usersApi.followUser) ;
};
export const unFollowUser = (id: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, id, follow, usersApi.unFollowUser);
};

export default usersReducer;