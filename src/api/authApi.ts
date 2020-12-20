import {axiosInstance, ResponseType, ResultsCodeForCaptcha, ResultsCodesEnum} from "./api";


type MeResponseDataType = {
    id: number,
    email: string,
    login: string,
}

type LoginResponseDataType = {
    userId: number
}


export const authApi = {
    me: () => {
        return axiosInstance.get<ResponseType<MeResponseDataType>>(`/auth/me`).then(res => res.data);
    },
    login: (email: string, password: string, rememberMe = false, captcha: null | string = null) => {
        return axiosInstance.post<ResponseType<LoginResponseDataType, ResultsCodeForCaptcha | ResultsCodesEnum>>(`/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        });
    },
    logout: () => {
        return axiosInstance.delete('/auth/login');
    },

};