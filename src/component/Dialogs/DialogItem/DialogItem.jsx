import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.link;
    return (
        <div className={s.dialog}>
            <NavLink className={ navData => navData.isActive ? s.active : s.no_active } to={path} >
                <img alt="ava" src={props.image}/>
                {props.name}
            </NavLink>
        </div>

    )
}


export default DialogItem
