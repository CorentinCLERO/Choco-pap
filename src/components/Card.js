import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/card.css'

const Card = ({ product, addToCart }) => {
    return (
        <li className='text-center py-4 col-sm-4'>
            <NavLink to="/PageProduct" state={{ product: product }}>
                <div id='imgProductSize'><img src={product.image} alt={product.title} /></div>
                <h2 className='h6'>{product.title}</h2>
            </NavLink>
            <div>{product.price} €</div>
            <div>Note : {product.note}</div>
            <button onClick={() => addToCart(product.id, 1)}>Ajouter au panier</button>
        </li>
    );
};

export default Card;