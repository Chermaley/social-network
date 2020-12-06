import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0",
    headers: {"API-KEY": "f68a4cda-2f4c-4785-816b-4190cdf2b12c"}
});

export const usersApi = {
    getUsers : async (currentPage = 1, pageSize = 10) => {
        const res = await axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`);
        return await res.data;
    },
    followUser : (id) => {
        return axiosInstance.post(`/follow/${id}`);
    },
    unFollowUser : (id) => {
        return axiosInstance.delete(`/follow/${id}`);
    }
};

export const authApi = {
    me: () => {
        return axiosInstance.get(`/auth/me`);
    },
    login: (email, password ,rememberMe) => {
        return axiosInstance.post(`/auth/login`, {email, password, rememberMe});
    },
    logout: () => {
        return axiosInstance.delete('/auth/login');
    }
};

export const profileApi = {
    getProfile: (id) => {
        return axiosInstance.get(`/profile/${id}`);
    },
    getStatus: (id) => {
        return axiosInstance.get(`/profile/status/${id}`);
    },
    updateStatus: (status) => {
        return axiosInstance.put(`/profile/status`, {status: status});
    }
};


