import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts=(props)=>{
   
    let newPostElement=React.createRef();

    let PostsElement=props.PostsData.map(p=><Post message={p.message} key={p.id} like={p.likesCount}/>);

    let onAddPost=()=>{
        
        props.addPost();
        

    }

    let onPostChange=()=>{
        
        let text= newPostElement.current.value;
        props.updateNewPostText(text);


    }


   return <div className={s.posts_block}>


        <div>
            <div>
                <textarea className={s.area_post} ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div className={s.btn}>
                <button className={s.btn_post} onClick={onAddPost}>Опубликовать</button>
            </div>

        </div>
        <div className={s.Posts}>

            {PostsElement}
        </div>
    </div>


}

export default MyPosts