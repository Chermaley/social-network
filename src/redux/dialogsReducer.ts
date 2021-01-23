/* eslint-disable no-case-declarations */
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
        ] as Array<DialogType>,
        pageSize: 9,
        currentPage: 1,
        totalMessageCount: null as number | null,
        isLoading: false,
        isSending: false
};

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    let messagesList;
    let newMessageList: any;
    switch (action.type) {
        case 'DIALOGS/SET_MESSAGES':
            return {
                ...state,
                messages: action.messages
            };
        case "DIALOGS/SET_OLD_MESSAGES":
            //check if element have already exist
            messagesList = [...action.messages, ...state.messages];
            newMessageList = messagesList.reduce((accumulator: { id: string; }[], current: MessageType) => {
                if (checkIfAlreadyExist(current)) {
                    return accumulator;
                } else {
                    return [...accumulator, current];
                }
                function checkIfAlreadyExist(currentVal: MessageType) {
                    return accumulator.some((item: { id: string; }) => {
                        return (item.id === currentVal.id);
                    });
                }
            }, []);
            return {
              ...state,
              messages: newMessageList
            };
        case "DIALOGS/SET_LAST_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        case "DIALOGS/SET_DIALOGS":
            return {
                ...state,
                dialogs: action.dialogs
            };
        case "DIALOGS/INCREMENT_CURRENT_PAGE":
            return {
                ...state,
                currentPage: ++state.currentPage
            };
        case "DIALOGS/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.page
            };
        case "DIALOGS/TOGGLE_LOADING_STATUS":
            return {
                ...state,
                isLoading: !state.isLoading
            };
        case "DIALOGS/TOGGLE_SENDING_STATUS":
            return {
                ...state,
                isSending: !state.isSending
            };
        case "DIALOGS/SET_TOTAL_MESSAGES_COUNT":
            return {
                ...state,
                totalMessageCount: action.count
            };
        default:
            return state;
    }
};

export const actions = {
    setMessages : (messages: Array<MessageType>) => ({type: 'DIALOGS/SET_MESSAGES', messages} as const),
    setOldMessages: (messages: Array<MessageType>) => ({type: 'DIALOGS/SET_OLD_MESSAGES', messages} as const),
    setDialogs: (dialogs: any) => ({type: 'DIALOGS/SET_DIALOGS', dialogs} as const),
    incrementCurrentPage: () => ({type: 'DIALOGS/INCREMENT_CURRENT_PAGE'} as const),
    setLastMessage: (message: MessageType) => ({type: 'DIALOGS/SET_LAST_MESSAGE', message} as const),
    setCurrentPage: (page: number) => ({type: 'DIALOGS/SET_CURRENT_PAGE', page} as const),
    toggleLoadingStatus: () => ({type: 'DIALOGS/TOGGLE_LOADING_STATUS'} as const),
    toggleSendingStatus: () => ({type: 'DIALOGS/TOGGLE_SENDING_STATUS'} as const),
    setTotalMessagesCount: (count: number) => ({type: 'DIALOGS/SET_TOTAL_MESSAGES_COUNT', count} as const)
};

//MESSAGES THUNK
export const getMessagesFromApi = (id: number, page?: number, loadOldPage = false): ThunkType => async (dispatch,getState) => {
    dispatch(actions.toggleLoadingStatus());
    const count = getState().dialogsPage.pageSize;
    let data = await dialogsApi.getMessages(id, count, page);
    if (!data.error) {
        dispatch(actions.toggleLoadingStatus());
        dispatch(actions.setTotalMessagesCount(data.totalCount));
        if (!loadOldPage) {
            dispatch(actions.setMessages(data.items));
        } else {
            dispatch(actions.setOldMessages(data.items));
        }
    }
};

export const loadPreviousMessagesPage = (id: number): ThunkType => async (dispatch, getState) => {
    dispatch(actions.incrementCurrentPage());
    const pageToLoad = getState().dialogsPage.currentPage;
    await dispatch(getMessagesFromApi(id, pageToLoad,true));
};


export const sendMessage = (id: number, body: string): ThunkType => async (dispatch) => {
    dispatch(actions.toggleSendingStatus());
    let res = await dialogsApi.sendMessage(id, body);
    if (res.resultCode === ResultsCodesEnum.Success) {
        dispatch(actions.setLastMessage(res.data.message));
        dispatch(actions.toggleSendingStatus());
    }
};

// DIALOGS THUNK
export const startDialog = (id: number): ThunkType => async (dispatch) => {
    const res = await dialogsApi.startDialog(id);
    if(res.resultCode === ResultsCodesEnum.Success) {
        dispatch(getDialogsFromApi());
    }
};

export const getDialogsFromApi = (): ThunkType => async (dispatch) => {
    let data = await dialogsApi.getDialogs();
    dispatch(actions.setDialogs(data));
};

export default dialogsReducer;

// Type
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType | FormAction>