import React from 'react';
import classes from './post.module.scss';

type PostProps = {
    img: string,
    text: string,
    likesCount: number
}

const Post:React.FC<PostProps> = ({img, text, likesCount}) => {
    return (
        <div className={classes.item}>
            <img src={img} alt='avatar'/>
            {text}
            <div>
                <span>like {likesCount}</span>
            </div>
        </div>
    );
};


export default Post;