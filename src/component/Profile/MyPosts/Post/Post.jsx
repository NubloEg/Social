import React from 'react';
import s from './Post.module.css';

const Post = (post) => {
    return <div className={s.item}>
        <img alt='post' src='https://cdn.onlinewebfonts.com/svg/img_167388.png'/>
        <div className={s.text}>
            {post.message}

        </div>
        <span className={s.like}>Нравится {post.like}</span>



    </div>


}

export default Post