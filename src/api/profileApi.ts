import {PhotosType, ProfileType} from "../types/types";
import {axiosInstance, ResponseType} from "./api";

type savePhotoResDataType = {
    photos: PhotosType
}

export const profileApi = {
    getProfile: (id: number) => {
        return axiosInstance.get<ProfileType>(`/profile/${id}`).then(res => res.data);
    },
    getStatus: (id: number) => {
        return axiosInstance.get<string>(`/profile/status/${id}`).then(res => res.data);
    },
    updateStatus: (status: string) => {
        return axiosInstance.put<ResponseType>(`/profile/status`, {status: status});
    },
    uploadUserPhoto: (photo: File) => {
        const formData = new FormData;
        formData.append("image", photo);
        return axiosInstance.put<ResponseType<savePhotoResDataType>>('/profile/photo', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    uploadUserData: (profile: ProfileType) => {
        return axiosInstance.put<ResponseType>('/profile', profile).then(res => res.data);
    }
};