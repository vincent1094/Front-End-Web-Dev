import React from 'react';
import "./Product.css";
import { useStateValue } from '../StateProvider';

const Product = ({id, title, price, rating, image}) => {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

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

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
