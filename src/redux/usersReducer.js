const CHANGE_TERM = 'CHANGE_TERM';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
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
export const changeTerm = (term) => ({type: CHANGE_TERM, term});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setUsers = (users) => ({type: SET_USERS, users});
export default usersReducer;