import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const initialState = {
    posts: [
        {img: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png', text: 'wow', likesCount: 2, id: 1},

    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    let newPost;
    switch (action.type) {
        case ADD_POST:
            newPost = {
                id: 5,
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
        default:
            return state;
    }
};

export const addNewPost = (postText) => ({type: ADD_POST, postText});
const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (id) => (dispatch) => {
    profileApi.getProfile(id)
        .then(res => {
            dispatch(setProfile(res.data));
        });
};


export const getStatus = (id) => (dispatch) => {
    profileApi.getStatus(id)
        .then(res => {
            dispatch(setStatus(res.data));
        });
};

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};

export default profileReducer;