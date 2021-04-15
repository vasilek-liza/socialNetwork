import React from 'react';
import  n from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import FriendsItem from '../Friends/FriendsItem'

const Navbar = () => {
    return <nav className={n.nav}>
        <div className={n.profile}>
            <NavLink to='/profile'  className={n.navLink} >Профиль</NavLink>
        </div>
        <div className={n.dialogs}>
            <NavLink to='/dialogs'  className={n.navLink}>Сообщения</NavLink>
        </div>
        <div className={n.news}>
            <NavLink to='/news'  className={n.navLink}>Новости</NavLink>
        </div>
        <div className={n.music}>
            <NavLink to='/music'  className={n.navLink}>Музыка</NavLink>
        </div>

        <div className={n.friends}>
            <NavLink to='/friends'  className={n.navLink}>Друзья</NavLink>
            <FriendsItem /> 
        </div>


        <div className={n.settings} >
            <NavLink to='/settings'  className={n.navLink}>Настройки</NavLink>
        </div>
    </nav>
}

export default Navbar;