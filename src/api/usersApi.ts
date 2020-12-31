import {axiosInstance, GetItemsType, ResponseType} from "./api";
import {UserType} from "../types/types";

export const usersApi = {
    getUsers: async (currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) => {
        const url =`/users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '': `&friend=${friend}`);
        return axiosInstance.get<GetItemsType<UserType>>(url).then(res => res.data);
    },
    followUser: (id: number) => {
        return axiosInstance.post<ResponseType>(`/follow/${id}`).then(res => res.data);
    },
    unFollowUser: (id: number) => {
        return axiosInstance.delete(`/follow/${id}`).then(res => res.data) as Promise<ResponseType>;
    }
};