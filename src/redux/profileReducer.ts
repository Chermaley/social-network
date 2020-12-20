import {ResultsCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {CommonThunkType, InferActionsTypes} from "./reduxStore";
import {profileApi} from "../api/profileApi";

const initialState = {
    posts: [
        {
            img: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
            text: 'wow',
            likesCount: 2,
            id: 1
        },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    let newPost;
    switch (action.type) {
        case "PROFILE/ADD-POST":
            newPost = {
                img: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
                id: 2,
                text: action.postText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case "PROFILE/SET_PROFILE":
            return {
                ...state,
                profile: action.profile
            };
        case "PROFILE/SET_STATUS":
            return {
                ...state,
                status: action.status
            };
        case "PROFILE/DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(({id}) => id !== action.id)
            };
        case "PROFILE/SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        case "PROFILE/SAVE_PROFILE_DATA_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, ...action.profile}
            };
        default:
            return state;
    }
};

export const actions = {
    addNewPost : (postText: string) => ({type: 'PROFILE/ADD-POST', postText} as const),
    setProfile : (profile: ProfileType) => ({type: 'PROFILE/SET_PROFILE', profile} as const),
    setStatus : (status: string) => ({type: 'PROFILE/SET_STATUS', status} as const),
    deletePost : (id: number) => ({type: 'PROFILE/DELETE_POST', id} as const),
    savePhotoSuccess : (photos: PhotosType)=> ({
        type: 'PROFILE/SAVE_PHOTO_SUCCESS',
        photos
    } as const),
    saveProfileDataSuccess : (profile: ProfileType) => ({
        type: 'PROFILE/SAVE_PROFILE_DATA_SUCCESS',
        profile
    } as const)
};

export const getProfile = (id: number ): ThunkType => async (dispatch) => {
    let profileData = await profileApi.getProfile(id);
    dispatch(actions.setProfile(profileData));
};

export const getStatus = (id: number): ThunkType => async (dispatch) => {
    let status = await profileApi.getStatus(id);
    dispatch(actions.setStatus(status));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let res = await profileApi.updateStatus(status);
    if (res.data.resultCode === ResultsCodesEnum.Success) {
        dispatch(actions.setStatus(status));
    }
};

export const savePhoto = (photo: any): ThunkType => async (dispatch) => {
    let data = await profileApi.uploadUserPhoto(photo);
    if (data.resultCode === ResultsCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
};

export const saveProfileData = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    let data = await profileApi.uploadUserData(profile);
    const userId = getState().auth.userId;
    if (data.resultCode === ResultsCodesEnum.Success) {
        if (userId != null){
            dispatch(getProfile(userId));
        }else {
            throw new Error("User id can`t be null");
        }
    } else {
        let message = data.messages.length !== 0 ? data.messages[0] : "some error";
        let action = stopSubmit("edit-profile", {_error: message});
        dispatch(action);
        return Promise.reject(data.messages[0]);
    }
};

export default profileReducer;

// Type
type ThunkType = CommonThunkType<ActionsType | FormAction>

export type InitialStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>;