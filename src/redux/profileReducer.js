const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const initialState = {
    posts: [
        {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 2, id: 1},
        {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'lol', likesCount: 5, id: 2},
        {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 4, id: 3},
        {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 20, id: 4}
    ],
    newPostText:'',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    let newPost;
    switch (action.type) {
        case ADD_POST:
            newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text});

export default profileReducer;