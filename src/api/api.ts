import axios from "axios";
import {ProfileType, UserType} from "../types/types";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    headers: {"API-KEY": "f68a4cda-2f4c-4785-816b-4190cdf2b12c"}
});

type GetUsersResponseType = {
    error: null | number,
    totalCount: number,
    items: Array<UserType>
}
type FollowUnfollowUserResponseType = {
    resultCode: ResultsCodesEnum,
    messages: Array<string>,
    data: Object
}

export const usersApi = {
    getUsers : async (currentPage = 1, pageSize = 10) => {
        const res = await axiosInstance.get<GetUsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`);
        return res.data;
    },
    followUser : (id: number) => {
        return axiosInstance.post<FollowUnfollowUserResponseType>(`/follow/${id}`);
    },
    unFollowUser : (id: number) => {
        return axiosInstance.delete<FollowUnfollowUserResponseType>(`/follow/${id}`);
    }
};

export enum ResultsCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultsCodeForCaptcha {
    captcha = 10
}
type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultsCodesEnum,
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number
    },
    resultCode: ResultsCodesEnum | ResultsCodeForCaptcha,
    messages: Array<string>
}
type LogoutResponseType = {
    resultCode: ResultsCodesEnum,
    messages: Array<string>,
    data: Object
}
export const authApi = {
    me: () => {
        return axiosInstance.get<MeResponseType>(`/auth/me`).then(res => res.data);
    },
    login: (email: string, password: string ,rememberMe= false, captcha :null |string = null) => {
        return axiosInstance.post<LoginResponseType>(`/auth/login`, {email, password, rememberMe, captcha});
    },
    logout: () => {
        return axiosInstance.delete<LogoutResponseType>('/auth/login');
    },

};
type getCaptchaResponseType = {
    url: string
}
export const securityApi = {
    getCaptcha: () => {
        return axiosInstance.get<getCaptchaResponseType>('/security/get-captcha-url');
    }
};

export const profileApi = {
    getProfile: (id: number) => {
        return axiosInstance.get(`/profile/${id}`).then(res => res.data);
    },
    getStatus: (id: number) => {
        return axiosInstance.get(`/profile/status/${id}`).then(res => res.data);
    },
    updateStatus: (status: string) => {
        return axiosInstance.put(`/profile/status`, {status: status});
    },
    uploadUserPhoto: (photo: File) => {
        const formData = new FormData;
        formData.append("image", photo);
        return axiosInstance.put('/profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    uploadUserData: (profile: ProfileType) => {
        return axiosInstance.put('/profile', profile);
    }
};


