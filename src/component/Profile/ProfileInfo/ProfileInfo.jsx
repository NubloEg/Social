import React from 'react';
import s from './ProfileInfo.module.css'
import Description from "./Description/Description";
import Preloader from "../../Prealoader/Preloader";

const ProfileInfo = (props) => {

if (!props.profile){
    <Preloader/>
}else{
    return <div>
        <div>
            <img alt={"description_img"} className={s.img} src='https://phonoteka.org/uploads/posts/2022-02/1645396767_2-phonoteka-org-p-fon-dlinnii-po-gorizontali-2.jpg'/>
        </div>
        <Description description={props.profile}/>

    </div>
}

}

export default ProfileInfo