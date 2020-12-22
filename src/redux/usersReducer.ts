import {UserType} from "../types/types";
import {CommonThunkType, InferActionsTypes} from "./reduxStore";
import {usersApi} from "../api/usersApi";
import {Dispatch} from "redux";
import {ResultsCodesEnum} from "../api/api";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [] as Array<number>, //array of users ID
    filter: {
        term: '',
        friend: null as null | boolean,
    }
};

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "USERS/SET_USERS":
            return {
                ...state,
                users: [...action.users]
            };
        case "USERS/TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: !user.followed};
                    }
                    return user;
                })
            };
        case "USERS/SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.usersCount
            };
        case "USERS/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case "USERS/TOGGLE_LOADING":
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case "USERS/TOGGLE_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            };
        case "USERS/SET_FILTER":
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
};

export const actions = {
    toggleLoadingStatus : () => ({type: 'USERS/TOGGLE_LOADING'} as const),
    setTotalUsersCount : (usersCount: number) => ({
        type: 'USERS/SET_TOTAL_USERS_COUNT',
        usersCount
    } as const),
    setCurrentPage : (pageNumber: number) => ({type: 'USERS/SET_CURRENT_PAGE', pageNumber} as const),
    setUsers : (users: Array<UserType>) => ({type: 'USERS/SET_USERS', users} as const),
    toggleFollowingProgress : (id: number, isFetching: boolean) => ({
        type: 'USERS/TOGGLE_FOLLOWING_PROGRESS',
        id,
        isFetching
    } as const),
    follow: (id: number) =>  ({type: 'USERS/TOGGLE_FOLLOW', id} as const),
    setFilter: (payload: FilterFormType) => ({type: 'USERS/SET_FILTER', payload} as const),
};

export const requestUsers = (currentPage: number, pageSize: number): ThunkType =>
    async (dispatch, getState) => {
        dispatch(actions.toggleLoadingStatus());
        let res;
        let filter = getState().usersPage.filter;
        res = await usersApi.getUsers(currentPage, pageSize, filter.term, filter.friend);
        dispatch(actions.toggleLoadingStatus());
        dispatch(actions.setTotalUsersCount(res.totalCount));
        dispatch(actions.setUsers(res.items));
    };

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, id: number, action: (id: number) => ActionsType, apiMethod: any) => {
    dispatch(actions.toggleFollowingProgress(id, true));
    let data = await apiMethod(id);
    if (data.resultCode === ResultsCodesEnum.Success) {
        dispatch(action(id));
        dispatch(actions.toggleFollowingProgress(id, false));
    }
};

export const followUser = (id: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, id, actions.follow, usersApi.followUser);
};

export const unFollowUser = (id: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, id, actions.follow, usersApi.unFollowUser);
};


export default usersReducer;

//Type
export type FilterFormType = typeof initialState.filter
type ThunkType = CommonThunkType<ActionsType>
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>