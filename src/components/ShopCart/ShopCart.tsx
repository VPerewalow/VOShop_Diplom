import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from "../../hook/useCartContext";
import Cart from '../Cart/Cart';
import './ShopCart.css';
//import { CartItem } from '../../types/types';

const ShopCart = () => { 
    const { state, dispatch } = useCartContext();
    
    return (
        <div className="shop-cart">
           <div className="shop-cart__cart-container">
                {state.selectedItems.map(item => <Cart key = {item.id} data = {item} />)}
           </div>
           {
                state.itemsCounter > 0 && 
                <div className="shop-cart__payments">
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total} $</p>
                    <div className="shop-cart__button-container">
                        <button className="shop-cart__clear-button" onClick ={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button className="shop-cart__checkout-button" onClick ={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                    </div>
                </div>
           }

           {
                state.checkout && 
                    <div className="shop-cart__complete">
                        <h3>Checked out successfully!</h3>
                        <Link to="/products" className="shop-cart__complete-button">Buy more</Link>
                    </div>
           }

           {
                !state.checkout && state.itemsCounter === 0 && 
                    <div className="shop-cart__complete">
                        <h3>Want to buy?</h3>
                        <Link to="/products" className="shop-cart__complete-button">Go to shop</Link>
                    </div>
           }
        </div>
    );
};

export default ShopCart;