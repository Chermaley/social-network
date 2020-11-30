import React from 'react';
import PropTypes from "prop-types";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./myPosts";



const MyPostsContainer = ({store}) => {

    const {posts, newPostText} = store.getState().profilePage;


    const addNewPost = () => {
        store.dispatch(addPostActionCreator());
    };
    const onPostChange = (text) => {
        store.dispatch(updateNewPostTextCreator(text));
    };

    return <MyPosts postData={posts} newPostText={newPostText} updateNewPost={onPostChange} addNewPost={addNewPost}/>;
};
MyPostsContainer.propTypes = {
    store: PropTypes.object
};
export default MyPostsContainer;