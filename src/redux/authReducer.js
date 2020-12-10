/* eslint-disable */
import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const DELETE_USER_DATA = 'AUTH/DELETE_USER_DATA';

const initialState = {
    isLoading: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case DELETE_USER_DATA: {
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false
            };
        }
        default:
            return state;
    }
};
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
const deleteAuthUserData = () => ({type: DELETE_USER_DATA});
export const getAuth = () => async (dispatch) => {
    let res = await authApi.me()
    if (res.data.resultCode === 0) {
        const {id, login, email} = res.data.data;
        dispatch(setAuthUserData(id, email, login));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {

    let res = await authApi.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        let message = res.data.messages !== 0 ? res.data.messages[0] : "some error"
        let action = stopSubmit("login", {_error: message});
        dispatch(action);
    }
};
export const logout = () => async (dispatch) => {
    let res = await authApi.logout();
    if (res.data.resultCode === 0) {
        dispatch(deleteAuthUserData());
    }

};
export default authReducer;