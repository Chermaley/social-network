import React from 'react';
import Post from './post';
import classes from './myPosts.module.scss';
import PropTypes from "prop-types";
import {actions} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPostForm from "./myPostForm";



// eslint-disable-next-line react/display-name
const MyPosts = React.memo(props => {
    let {postData, addNewPost} = props;

    const posts = postData.map(({img, text, id, likesCount}) => {
        return <Post key={id} img={img} text={text} likesCount={likesCount}/>;
    });

    const addPost = (value) => {
        const post = value.postText;
        addNewPost(post);
    };
    return (
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <MyPostForm onSubmit={addPost}/>
            <div>
                {posts}
            </div>
        </div>
    );
});

MyPosts.propTypes = {
    postData: PropTypes.array,
    addNewPost: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const {addNewPost} = actions;
export default connect(mapStateToProps, {addNewPost})(MyPosts);