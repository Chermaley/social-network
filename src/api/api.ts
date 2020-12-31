import axios from "axios";


export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    headers: {"API-KEY": "f68a4cda-2f4c-4785-816b-4190cdf2b12c"}
});

export type GetItemsType<items> = {
    items: Array<items>,
    totalCount: number,
    error: string | null
}

export type ResponseType<D = {}, RC = ResultsCodesEnum> = {
    data: D,
    messages: Array<string>,
    resultCode: RC,
    totalCount?: number
}

export enum ResultsCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultsCodeForCaptcha {
    captcha = 10
}



