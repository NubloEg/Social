import React from 'react';
import logo from '../../img/logo.png';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <NavLink to='/profile'>
            <img alt="logo"src={logo}/>
        </NavLink>
        <NavLink className={s.text} to='/profile'>
            HumanCommunity
        </NavLink>
        <div className={s.login_block}>
            {props.isAuth?props.login:<NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header