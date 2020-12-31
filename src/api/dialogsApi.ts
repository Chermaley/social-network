import {DialogType, MessageType} from "../redux/dialogsReducer";
import {axiosInstance, GetItemsType, ResponseType} from "./api";

export const dialogsApi = {
    getDialogs: () => {
        return axiosInstance.get<GetItemsType<DialogType>>(`/dialogs`).then(res => res.data);
    },
    startDialog: (id: number) => {
        return axiosInstance.put<ResponseType>(`/dialogs/${id}`).then(res => res.data);
    },
    getMessages: (id: number) => {
        return axiosInstance.get<GetItemsType<MessageType>>(`/dialogs/${id}/messages`).then(res => res.data);
    },
    sendMessage: (id: number, body: string) => {
        return axiosInstance.post<ResponseType>(`/dialogs/${id}/messages` , {body}).then(res => res.data);
    }
}