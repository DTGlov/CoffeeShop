import React from 'react';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';

function Header() {
    return (
        <header className="header">
            <nav className="nav-container">
                <Logo />
                <NavItems/>
            </nav>
      </header>
    )
}

export default Header
