import React from 'react';
import s from './InfoMe.module.css'

const InfoMe = (props) => {

    return <div className={s.infoMe}>
        <div>
            <div className={s.block}>{props.me.fullName}</div>
            <div className={s.block}>Возраст:23</div>
            <div className={s.block}>{props.me.aboutMe}</div>
        </div>
        <div>
            <a href={"#"}>
                <div className={s.block}>Facebook:{props.me.contacts.facebook}</div>
            </a>
            <a href={"#"}>
                <div className={s.block}>vk:{props.me.contacts.vk}</div>
            </a>
            <a href={"#"}>
                <div className={s.block}>instagram:{props.me.contacts.instagram}</div>
            </a>
            <a href={"#"}>
                <div className={s.block}>github:{props.me.contacts.github}</div>
            </a>




        </div>


    </div>


}

export default InfoMe