import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'PROFILE/ADD-POST';
const SET_PROFILE = 'PROFILE/SET_PROFILE';
const SET_STATUS = 'PROFILE/SET_STATUS';
const DELETE_POST = 'PROFILE/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'PROFILE/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_DATA_SUCCESS = 'SAVE_PROFILE_DATA_SUCCESS';


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
export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action: any): InitialStateType => {
    let newPost;
    switch (action.type) {
        case ADD_POST:
            newPost = {
                img:'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
                id: 2,
                text: action.postText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(({id}) => id !== action.id)
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        case SAVE_PROFILE_DATA_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, ...action.profile}
            };
        default:
            return state;
    }
};
type AddNewPostActionType = {
    type: typeof ADD_POST,
    postText: string
}
export const addNewPost = (postText: string): AddNewPostActionType => ({type: ADD_POST, postText});

type SetProfileActionType = {
    type: typeof SET_PROFILE,
    profile: ProfileType
}
const setProfile = (profile: ProfileType): SetProfileActionType => ({type: SET_PROFILE, profile});

type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});

type DeletePostActionType = {
    type: typeof DELETE_POST,
    id: number
}
export const deletePost = (id: number): DeletePostActionType => ({type: DELETE_POST, id});

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

type SaveProfileDataSuccessActionType = {
    type: typeof SAVE_PROFILE_DATA_SUCCESS,
    profile: ProfileType
}
export const saveProfileDataSuccess = (profile: ProfileType): SaveProfileDataSuccessActionType => ({type: SAVE_PROFILE_DATA_SUCCESS, profile});

export const getProfile = (id: number) => async (dispatch: any) => {
    let res = await profileApi.getProfile(id);
    dispatch(setProfile(res.data));
};


export const getStatus = (id: number) => async (dispatch: any) => {
    let res = await profileApi.getStatus(id);
    dispatch(setStatus(res.data));

};

export const updateStatus = (status: string) => async (dispatch: any) => {
    let res = await profileApi.updateStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (photo: any) => async (dispatch: any) => {
    let res = await profileApi.uploadUserPhoto(photo);
    console.log(res);
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos));
    }
};

export const saveProfileData = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    let res = await profileApi.uploadUserData(profile);
    if (res.data.resultCode === 0) {
        dispatch(getProfile(getState().auth.userId));
    } else {
        let message = res.data.messages !== 0 ? res.data.messages[0] : "some error";
        let action = stopSubmit("edit-profile", {_error: message});
        dispatch(action);
        return Promise.reject(res.data.messages[0]);
    }
};

export default profileReducer;