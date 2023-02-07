import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageProduct = ({ addToCart }) => {

    let location = useLocation();
    let product = location.state.product

    const [qty, setQty] = useState(0)

    return (
        <div className='row col-10 offset-1 p-sm-5'>
            <div className='col-sm-6'>
                <h2 className='py-1'>{product.title}</h2>
                <div className='py-1'>{product.price} €</div>
                <div className='py-1'>{product.description}</div>
                <input type="number" name="productNumber" id="productNumber" className='my-2' min={0} value={qty} onChange={(e) => setQty(Number(e.target.value))} />
                <button className='my-2 ms-sm-3 d-block d-sm-inline' onClick={() => qty > 0 ? addToCart(product.id, qty) : ''}>AJOUTER AU PANIER</button>
            </div>
            <img src={product.image} alt={product.title} className='py-1 order-sm-first col-sm-6' />
            <div>
                <h3 className='py-1'>Ingrédients</h3>
                <div className='py-1'>{product.ingredients}</div>
            </div>
        </div>
    );
};

export default PageProduct;