import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";



const Friends = () => {
    return (
        <div className={s.friends}>
           <h1>Друзья</h1>
                <div className={s.friend}>
                    <NavLink   to='/dialogs/1'>
                        <img alt="friend" src='https://cdn-icons-png.flaticon.com/512/3048/3048122.png'/>
                        <span>Egor</span>
                    </NavLink>
                    <NavLink   to='/dialogs/4'>
                        <img alt="friend" src='https://cdn-icons-png.flaticon.com/512/3048/3048122.png'/>
                        <span>Miss V</span>
                    </NavLink>
                    <NavLink   to='/dialogs/3'>
                        <img alt="friend" src='https://cdn-icons-png.flaticon.com/512/3048/3048122.png'/>
                        <span>Kama</span>
                    </NavLink>
                </div>









        </div>
    )
}

export default Friends