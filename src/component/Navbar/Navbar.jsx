import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";



const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item} >
                <img alt='icon' src='https://cdn-icons-png.flaticon.com/512/1250/1250689.png'/>
                <NavLink  to="/profile/27309"  className = { navData => navData.isActive ? s.active : s.no_active }> Профиль</NavLink>
            </div>
            <div className={s.item}>
                <img alt='icon' src='https://cdn-icons-png.flaticon.com/512/3388/3388300.png'/>
                <NavLink to="/dialogs"  className = { navData => navData.isActive ? s.active : s.no_active }> Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <img alt='icon' src='https://cdn-icons-png.flaticon.com/512/1450/1450939.png'/>
                <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.no_active }> Новости </NavLink>
            </div>
            <div className={s.item}>
                <img alt='icon' src='https://cdn-icons-png.flaticon.com/512/3039/3039404.png'/>
                <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.no_active }> Музыка </NavLink>
            </div>
            <div className={s.item}>
                <img alt='icon' src='https://cdn-icons-png.flaticon.com/512/263/263074.png'/>
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.no_active }> Настройки</NavLink>
            </div>
            <div className={s.item}>
                <img alt='icon' src='https://cdn-icons-png.flaticon.com/512/751/751463.png'/>
                <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.no_active }> Найти друга</NavLink>
            </div>

            <Friends/>
        </nav>

    )
}

export default Navbar