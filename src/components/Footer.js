import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <div className='bg-info pb-3 bg-opacity-75 ps-2'>
                <div>
                    <h1 className='py-3'>Choco Pap</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium expedita unde earum iste placeat! In praesentium exercitationem eaque explicabo reprehenderit?</p>
                </div>
                <div className='pb-3'>
                    <h1 className='py-3'>Contact</h1>
                    <div className='py-3'>Adresse: 51 rue du chocolat 75000 Paris<br />
                        T&eacute;l&eacute;phone: 01 23 45 67 89<br />
                        Horaires: 9h00-17h00 du lundi au vendredi
                    </div>
                </div>
                <div className='py-4'>
                    <span className='pe-1'><FaFacebookSquare size="50" /></span>
                    <span className='px-2'><FaInstagramSquare size="50" /></span>
                    <span className='px-1'><FaTwitterSquare size="50" /></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer