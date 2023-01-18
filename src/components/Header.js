import React from 'react'
import logo from '../data/images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

function Header() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <header className='bg-info d-block bg-opacity-25 d-flex justify-content-between'>
                <img src={logo} alt="Logo Choco-Pap" className='logo p-1' />
                <button className='btn btn-lg' onClick={() => setShowMenu(!showMenu)}><GiHamburgerMenu /></button>
            </header>
            {showMenu ? <HamburgerMenu /> : null}
        </>
    );
}

export default Header;