import React from 'react';
import { ImCross } from 'react-icons/im'
import "../css/panier.css"
import ItemPanier from './ItemPanier'

const Panier = ({ unsetDisplayPanier, products, cart, updateQty, removeToCart, totalPrice, removeAllCart }) => {
    return (
        <div className='position-absolute col-12 col-sm-6 offset-sm-6 child'>
            <div className='bg-info head'>
                <ImCross className='m-2 p-1 border border-2 rounded border-dark cursor' onClick={unsetDisplayPanier} size={35} />
                <h2 className='text-center pb-4 mb-0'>PANIER</h2>
            </div>
            <ul className='itemsPanier bg-warning m-0'>
                {cart.map(cartItem => {
                    products.find(product => product.id === cartItem);
                    return (<ItemPanier key={cartItem.id} products={products} cartItem={cartItem} updateQty={updateQty} removeToCart={removeToCart} />);
                })}
            </ul>
            <div className='bg-info text-center'>
                <div className='text-center py-4'>TOTAL : {totalPrice} €</div>
                <button className='my-2 buttonPanier' onClick={() => removeAllCart()}>REINITIALISER LE PANIER</button><br />
                <button className='my-2 buttonPanier'>VALIDER LE PANIER</button>
            </div>
        </div>
    );
};

export default Panier;