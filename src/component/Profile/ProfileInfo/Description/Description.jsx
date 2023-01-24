import React from 'react';
import s from './Description.module.css'
import InfoMe from "./InfoMe/InfoMe";

const Description = (props) => {
    return <div className={s.description_block}>
        <img alt={"profile_icon"} src={props.description.photos.large}/>
        <InfoMe me={props.description}/>
    </div>
}

export default Description