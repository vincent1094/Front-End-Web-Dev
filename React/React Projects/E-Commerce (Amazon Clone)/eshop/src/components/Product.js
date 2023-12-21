import React from 'react';
import "./Product.css";

const Product = ({id, title, price, rating, image}) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">{Array(rating).fill().map((_,i) => (
                    <p>⭐</p>
                ))}</p>
            </div>
            <img src={image} alt="product" />

            <button>Add to Basket</button>
        </div>
    );
}

export default Product;
