import React, { useEffect, useState } from 'react'
import logo from '../logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import '../css/header.css'
import { NavLink } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa'

function Header({ setDisplayPanier, displayPanier, numberOfProducts }) {
    const [showMenu, setShowMenu] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleSmallScreen = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth)

            if (window.innerWidth > 576) {
                setShowMenu(false)
            }
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    useEffect(() => {
        if (showMenu) {
            document.querySelector("header").style.height = '238px'
        } else {
            document.querySelector("header").style.height = '88px'
        }
    }, [showMenu])


    return (
        <header className='bg-info d-block bg-opacity-25'>
            <img src={logo} alt="Logo Choco-Pap" className='logo m-2 position-absolute' />
            {(showMenu || largeur > 576) && (
                <ul className='liste'>
                    <li className='items'><NavLink to="/" onClick={() => setShowMenu(false)}>Acceuil</NavLink></li>
                    <li className='items'><NavLink to="/Boutique" onClick={() => setShowMenu(false)}>Boutique</NavLink></li>
                    <li className='items'><span className='cursor' onClick={() => { setShowMenu(false); setDisplayPanier(!displayPanier) }}>{largeur < 576 ? 'Panier' : ''} {numberOfProducts} <FaShoppingBasket /></span></li>
                </ul>
            )}
            <span className='btnn' onClick={toggleSmallScreen}><GiHamburgerMenu size={50} /></span>
        </header>
    );
}

export default Header;