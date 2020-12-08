import {profileApi} from "../api/api";

const ADD_POST = 'PROFILE/ADD-POST';
const SET_PROFILE = 'PROFILE/SET_PROFILE';
const SET_STATUS = 'PROFILE/SET_STATUS';
const DELETE_POST = 'PROFILE/DELETE_POST';
const initialState = {
    posts: [
        {
            img: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
            text: 'wow',
            likesCount: 2,
            id: 1
        },

    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    let newPost;
    switch (action.type) {
        case ADD_POST:
            newPost = {
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
        default:
            return state;
    }
};

export const addNewPost = (postText) => ({type: ADD_POST, postText});
const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (id) => ({type: DELETE_POST, id});

export const getProfile = (id) => async (dispatch) => {
    let res = await profileApi.getProfile(id);
    dispatch(setProfile(res.data));

};


export const getStatus = (id) => async (dispatch) => {
    let res = await profileApi.getStatus(id);
    dispatch(setStatus(res.data));

};

export const updateStatus = (status) => async (dispatch) => {
    let res = await profileApi.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export default profileReducer;