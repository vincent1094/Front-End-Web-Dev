import "./CheckoutProduct.css";
import React from 'react';

const CheckoutProduct = () => {
    return (
        <div className="checkoutProduct">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkoutProduct__image" />
         <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                Bennet Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>20</strong>
            </p>
            <p className="checkoutProduct__rating">
                ⭐⭐ 
            </p>
            <button>Remove from Basket</button>
         </div>
        </div>
    );
}

export default CheckoutProduct;

