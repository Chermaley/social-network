/* eslint-disable */
import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const DELETE_USER_DATA = 'AUTH/DELETE_USER_DATA';
const SET_CAPTCHA_URL = 'AUTH/SET_CAPTCHA_URL';
const CAPTCHA_SUCCESS = 'AUTH/CAPTCHA_SUCCESS';

const initialState = {
    isLoading: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
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
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captcha: action.url
            }
        }
        case CAPTCHA_SUCCESS: {
            return {
                ...state,
                captcha: null
            }
        }
        default:
            return state;
    }
};
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
const deleteAuthUserData = () => ({type: DELETE_USER_DATA});
const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_URL, url});
const captchaSuccess = () => ({type: CAPTCHA_SUCCESS});
export const getAuth = () => async (dispatch) => {
    let res = await authApi.me()
    if (res.data.resultCode === 0) {
        const {id, login, email} = res.data.data;
        dispatch(setAuthUserData(id, email, login));
    }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

    let res = await authApi.login(email, password, rememberMe, captcha)


    if (res.data.resultCode === 0) {
        dispatch(getAuth());
        dispatch(captchaSuccess())
    } else{
        let message = res.data.messages !== 0 ? res.data.messages[0] : "some error"
        let action = stopSubmit("login", {_error: message});
        if (res.data.resultCode === 10) {
            dispatch(action);
            dispatch(getCaptchaUrl())
        }
        dispatch(action);
    }
};
export const logout = () => async (dispatch) => {
    let res = await authApi.logout();
    if (res.data.resultCode === 0) {
        dispatch(deleteAuthUserData());
    }
};
export const getCaptchaUrl = () => async (dispatch) => {
    let res = await securityApi.getCaptcha();
    if (res.data.url) {
        dispatch(setCaptchaUrl(res.data.url))
    }
}
export default authReducer;