import {AppStateType} from "./reduxStore";

export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status;
};
export const getProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile;
};
