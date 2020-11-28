import React from 'react';
import Post from './post';
import classes from './myPosts.module.scss';

const postData = [
    {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 2, id: 1},
    {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'lol', likesCount: 5, id: 2},
    {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 4, id: 1},
    {img: 'https://i.ytimg.com/vi/CtI_D76BcV0/maxresdefault.jpg', text: 'wow', likesCount: 20, id: 1},
];

const MyPosts = () => {
    const posts = postData.map(({img, text, id, likesCount}) => {
        return <Post key={id} img={img} text={text} likesCount={likesCount}/>;
    });
    return (
        <div className={classes.postBlock}>
            <h3>My post</h3>
            <div>New post</div>
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
};
export default MyPosts;