import React, {memo} from 'react';
import Post from './post';
import classes from './myPosts.module.scss';
import {actions} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPostForm from "./myPostForm";
import {InitialStateType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";


type PropTypes= {
    postData: InitialStateType["posts"],
    addNewPost: (value: string) => void
}
export type MyPostsFormValuesType = {
    postText: string
}

// eslint-disable-next-line react/display-name
const MyPosts: React.FC<PropTypes> = memo(props => {
    let {postData, addNewPost} = props;

    const posts = postData.map(({img, text, id, likesCount}) => {
        return <Post key={id} img={img} text={text} likesCount={likesCount}/>;
    });

    const addPost = (value: MyPostsFormValuesType) => {
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

const mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage.posts,
    };
};

const {addNewPost} = actions;
export default connect(mapStateToProps, {addNewPost})(MyPosts);