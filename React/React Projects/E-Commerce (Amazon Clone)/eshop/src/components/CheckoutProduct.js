import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({title, image, rating, price, id}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
          <img src={image} alt="" className="checkoutProduct__image" />
         <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                {title}
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className="checkoutProduct__rating">
                {
                    Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))
                } 
            </p>
            <button onClick={removeFromBasket}>Remove from Basket</button>
         </div>
        </div>
    );
}

export default CheckoutProduct;

