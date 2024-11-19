import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { shorten, quantityCount, isInCart } from '../../helper/functions';
import useCartContext from "../../hook/useCartContext";
import trashIcon from '../../assets/trash.svg';
import './Product.css';
import { ProductData } from '../../types/types';

interface ProductProps { 
    productData: ProductData; 
    onAddToCart: () => void; }


const Product = ({ productData }: ProductProps) => {
    const { state, dispatch } = useCartContext();

    return (
        <div className="product">
            <div>
                <img className="product__image" src={productData.image} alt="product" />
            </div>
            <h3 className="product__title">{shorten(productData.title)}</h3>
            <p className="product__price">{productData.price} $</p>
            <div className="product__link-container">
                <Link to={`/products/${productData.id}`} className="product__link">Details</Link>
                <div className="product__button-container">
                    {quantityCount(state, productData.id) > 1 && <button className="product__button product__button--small" onClick={() => dispatch({ type: "DECREASE", payload: productData })}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className="product__button product__button--small" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}><img src={trashIcon} alt="trashIcon" /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className="product__counter">{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                            <button className="product__button product__button--small" onClick={() => dispatch({ type: "INCREASE", payload: productData })}>+</button> :
                            <button className="product__button" onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>Add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;