import {ResultsCodesEnum, ResultsCodeForCaptcha} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {CommonThunkType, InferActionsTypes} from "./reduxStore";
import {authApi} from "../api/authApi";
import {securityApi} from "../api/securityApi";

const initialState = {
    isLoading: false,
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captcha: null as string | null
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case "AUTH/DELETE_USER_DATA": {
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false,
            };
        }
        case "AUTH/SET_CAPTCHA_URL": {
            return {
                ...state,
                captcha: action.url
            };
        }
        case "AUTH/CAPTCHA_SUCCESS": {
            return {
                ...state,
                captcha: null
            };
        }
        default:
            return state;
        }
};

const actions = {
    setAuthUserData :(userId: number, email: string, login: string) => ({type: 'AUTH/SET_USER_DATA', data: {userId, email, login}} as const),
    deleteAuthUserData:  () => ({type: 'AUTH/DELETE_USER_DATA'} as const),
    setCaptchaUrl : (url: string) => ({type: 'AUTH/SET_CAPTCHA_URL', url} as const),
    captchaSuccess : () => ({type: 'AUTH/CAPTCHA_SUCCESS'} as const)
};

export const getAuth = (): ThunkType => async (dispatch) => {
    let meData = await authApi.me();
    if (meData.resultCode === ResultsCodesEnum.Success) {
        const {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch) => {
        let res = await authApi.login(email, password, rememberMe, captcha);
        if (res.data.resultCode === ResultsCodesEnum.Success) {
            dispatch(getAuth());
            dispatch(actions.captchaSuccess());
        } else {
            let message = res.data.messages.length !== 0 ? res.data.messages[0] : "some error";
            let action = stopSubmit("login", {_error: message});
            if (res.data.resultCode === ResultsCodeForCaptcha.captcha) {
                dispatch(action);
                dispatch(getCaptchaUrl());
            }
            dispatch(action);
        }
    };

export const logout = (): ThunkType => async (dispatch) => {
    let res = await authApi.logout();
    if (res.data.resultCode === ResultsCodesEnum.Success) {
        dispatch(actions.deleteAuthUserData());
    }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await securityApi.getCaptcha();
    if (data.url) {
        dispatch(actions.setCaptchaUrl(data.url));
    }
};

export default authReducer;
// Type
export type InitialStateType = typeof initialState
type ThunkType = CommonThunkType<ActionsType | FormAction>
type ActionsType = InferActionsTypes<typeof actions>;
