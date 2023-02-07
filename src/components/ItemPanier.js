import React, { useState } from 'react';
import { useEffect } from 'react';
import { ImCross } from 'react-icons/im'
import '../css/itemPanier.css'

const ItemPanier = ({ products, cartItem, updateQty, removeToCart }) => {

    const [idProduct, setIdProduct] = useState(0)

    useEffect(() => {
        setIdProduct(cartItem.id - 1)
    }, [cartItem])

    if (cartItem.qty === 0) removeToCart(products[idProduct].id)

    var prixTotalProduit = cartItem.qty * products[idProduct].price
    //sometimes the number appears with more than 2 digits after the point so we round up
    var roundPrice = Math.round((prixTotalProduit) * 100) / 100

    return (
        <li className='row auMilieu align-middle text-center'>
            <div className='col-1'>
                <ImCross className='cursor' onClick={() => removeToCart(products[idProduct].id)} />
            </div>
            <div className='col-4'>
                <img className='imagePanier' src={products[idProduct].image} alt={products[idProduct].title} />
            </div>
            <div className='col-4'>
                <span>{products[idProduct].title}</span><br />
                <span>{roundPrice} €</span>
            </div>
            <div className='col-3'>
                <input className="col-10" type="number" value={cartItem.qty} name="numberProduct" id="numberProduct" onChange={(e) => updateQty(products[idProduct].id, Number(e.target.value))} />
            </div>
        </li>
    );
};

export default ItemPanier;