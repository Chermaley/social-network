import {AppStateType} from "./reduxStore";

export const getCaptcha = (state: AppStateType) => {
    return state.auth.captcha;
};
export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth;
};
export const getLogin = (state: AppStateType) => {
    return state.auth.login;
};
export const getUserId = (state: AppStateType) => {
    return state.auth.userId;
};
