import {AppStateType} from "./reduxStore";

export const getDialogs = (state: AppStateType) => {
    return state.dialogsPage.dialogs;
};

export const getMessages = (state: AppStateType) => {
    return state.dialogsPage.messages;
};

export const getIsLoading = (state: AppStateType) => {
    return state.dialogsPage.isLoading;
};

export const getIsSending = (state: AppStateType) => {
    return state.dialogsPage.isSending;
};

export const getTotalMessagesCount = (state: AppStateType) => {
    return state.dialogsPage.totalMessageCount;
};

export const getPageSize = (state: AppStateType) => {
    return state.dialogsPage.pageSize;
};