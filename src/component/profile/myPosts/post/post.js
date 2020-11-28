
import React from 'react';
import classes from './post.module.scss';
import PropTypes from 'prop-types';

const Post = ({img, text, likesCount}) => {
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

Post.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    likesCount: PropTypes.number
};

export default Post;