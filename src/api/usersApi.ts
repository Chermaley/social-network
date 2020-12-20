import {axiosInstance, GetItemsType, ResponseType} from "./api";

export const usersApi = {
    getUsers: async (currentPage = 1, pageSize = 10) => {
        return axiosInstance.get<GetItemsType>(`/users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },
    followUser: (id: number) => {
        return axiosInstance.post<ResponseType>(`/follow/${id}`).then(res => res.data);
    },
    unFollowUser: (id: number) => {
        return axiosInstance.delete(`/follow/${id}`).then(res => res.data) as Promise<ResponseType>;
    }
};