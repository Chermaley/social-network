import {axiosInstance} from "./api";

type getCaptchaResponseType = {
    url: string
}

export const securityApi = {
    getCaptcha: () => {
        return axiosInstance.get<getCaptchaResponseType>('/security/get-captcha-url').then(res => res.data);
    }
};