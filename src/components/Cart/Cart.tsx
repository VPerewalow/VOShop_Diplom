import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { shorten } from '../../helper/functions';
import trashIcon from '../../assets/trash.svg';
import './Cart.css';

const Cart = (props: { data: { image: any; title: any; quantity: any; price: any; }; }) => {
    const context = useContext(CartContext);
    if (!context) {
        return null;
    }
    const { dispatch } = context;
    const { image, title, quantity, price } = props.data;

    return (
        <div className="cart">
            <img className="cart__product-image" src={image} alt="product" />
            <div className="cart__data">
                <h3 className="cart__data-title">{shorten(title)}</h3>
                <p className="cart__data-price">{price} $</p>
            </div>
            <div>
                <span className="cart__quantity">{quantity}</span>
            </div>
            <div className="cart__button-container">
                {
                    quantity > 1 ?
                        <button className="cart__button" onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>-</button> :
                        <button className="cart__button" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}><img src={trashIcon} alt="trash icon" /></button>
                }
                <button className="cart__button" onClick={() => dispatch({ type: "INCREASE", payload: props.data })}>+</button>
            </div>
        </div>
    );
};

export default Cart;