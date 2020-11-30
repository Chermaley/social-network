import React from 'react';
import Post from './post';
import classes from './myPosts.module.scss';
import PropTypes from "prop-types";


const MyPosts = ({postData, newPostText, updateNewPost, addNewPost}) => {


    const posts = postData.map(({img, text, id, likesCount}) => {
        return <Post key={id} img={img} text={text} likesCount={likesCount}/>;
    });

    const addPost = () => {
        addNewPost();
    };

    const onPostChange = (e) => {
        const text = e.target.value;
        updateNewPost(text);
    };
    console.log(newPostText);
    return (
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <div>
                <textarea onChange={onPostChange} value={newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
};
MyPosts.propTypes = {
    postData: PropTypes.array,
    updateNewPost: PropTypes.func,
    addNewPost: PropTypes.func,
    newPostText: PropTypes.any
};
export default MyPosts;