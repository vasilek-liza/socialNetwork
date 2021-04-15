import React from 'react';
import  s from './Header.module.css';
import Logo from './logo';


const Header = () => {
    return <header className={s.header}>
        <div className={s.header_logo}>
          <Logo /> 
        </div>
    </header>
}

export default Header;