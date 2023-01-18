import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <div className='bg-info pb-3 bg-opacity-75'>
                <div>
                    <h1>Choco Pap</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium expedita unde earum iste placeat! In praesentium exercitationem eaque explicabo reprehenderit?</p>
                </div>
                <div className='pb-3'>
                    <h1>Contact</h1>
                    <div><strong>Adresse:</strong> 51 rue du chocolat 75000 Paris</div>
                    <div><strong>T&eacute;l&eacute;phone:</strong> 01 23 45 67 89</div>
                    <div><strong>Horaires:</strong> 9h00-17h00 du lundi au vendredi</div>
                </div>
                <div>
                    <span className='px-1'><FaFacebookSquare size="50" /></span>
                    <span className='px-2'><FaInstagramSquare size="50" /></span>
                    <span className='px-1'><FaTwitterSquare size="50" /></span>
                </div>
            </div>
        </footer>
    );
}

export default Footer