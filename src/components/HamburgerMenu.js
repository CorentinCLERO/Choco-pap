import React from 'react'
import { NavLink } from "react-router-dom"
import { FaShoppingBasket } from 'react-icons/fa'


function HamburgerMenu() {
    return (
        <div className='bg-info bg-opacity-25 pb-3'>
            <NavLink to="/"><h1 className='text-decoration-underline ps-1 py-3'>Acceuil</h1></NavLink>
            <NavLink to="/Boutique"><h1 className='text-decoration-underline ps-1 pb-3'>Boutique</h1></NavLink>
            <NavLink to="/Panier"><h1><strong className='text-decoration-underline ps-1 fw-semibold'>Panier</strong> <FaShoppingBasket /></h1></NavLink>
        </div>
    )
}

export default HamburgerMenu