import {ProfileType} from "../types/types";
import {CommonThunkType, InferActionsTypes} from "./reduxStore";
import {FormAction} from "redux-form";
import {profileApi} from "../api/profileApi";

let initialState = {
    profileData: null as ProfileType | null
};


const sidebarReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case "SIDEBAR/SET_PROFILE":
            return {
                ...state,
                profileData: actions.profile
            };
    }
    return state;
};

export const actions = {
    setProfileForSideBar: (profile: ProfileType) => ({type: 'SIDEBAR/SET_PROFILE', profile} as const)
};

export const getProfileForSideBar = (): ThunkType => async (dispatch, getState) => {
    const authId = getState().auth.userId;
    if (authId) {
        let profileData = await profileApi.getProfile(authId);
        dispatch(actions.setProfileForSideBar(profileData));
    }
};

export default sidebarReducer;

type ThunkType = CommonThunkType<ActionsType | FormAction>

export type InitialStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>;