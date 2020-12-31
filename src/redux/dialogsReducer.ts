import {CommonThunkType, InferActionsTypes} from "./reduxStore";
import {FormAction} from "redux-form";
import {dialogsApi} from "../api/dialogsApi";
import {PhotosType} from "../types/types";
import {ResultsCodesEnum} from "../api/api";

export type MessageType = {
    addedAt: string,
    body: string,
    id: string,
    recipientId: number,
    senderId: number,
    senderName: string,
    translatedBody: any,
    viewed: boolean
}

export type DialogType = {
    hasNewMessages: boolean,
    id: number,
    lastDialogActivityDate: "2020-12-30T10:41:41.887",
    lastUserActivityDate: "2020-12-27T17:05:23.097",
    newMessagesCount: 0,
    photos: PhotosType,
    userName: string
}
const initialState = {
        messages: [
        ] as Array<MessageType>,
        dialogs: [
        ] as Array<DialogType>
};

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'DIALOGS/SET_MESSAGES':
            return {
                ...state,
                messages: action.messages
            };
        case "DIALOGS/SET_DIALOGS":
            return {
                ...state,
                dialogs: action.dialogs
            };
        default:
            return state;
    }
};

export const actions = {
    setMessages : (messages: Array<MessageType>) => ({type: 'DIALOGS/SET_MESSAGES', messages} as const),
    setDialogs: (dialogs: any) => ({type: 'DIALOGS/SET_DIALOGS', dialogs} as const)
};

export const getDialogsFromApi = (): ThunkType => async (dispatch) => {
    let data = await dialogsApi.getDialogs();
    dispatch(actions.setDialogs(data));
};

export const getMessagesFromApi = (id: number): ThunkType => async (dispatch) => {
    let data = await dialogsApi.getMessages(id);
    dispatch(actions.setMessages(data.items));
};

export const startDialog = (id: number): ThunkType => async (dispatch) => {
    const res = await dialogsApi.startDialog(id);
    if(res.resultCode === ResultsCodesEnum.Success) {
        dispatch(getDialogsFromApi());
    }
};

export const sendMessage = (id: number, body: string): ThunkType => async (dispatch) => {
    let res = await dialogsApi.sendMessage(id, body);
    if (res.resultCode === ResultsCodesEnum.Success) {
        dispatch(getMessagesFromApi(id));
    }
};

export default dialogsReducer;

// Type
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType | FormAction>