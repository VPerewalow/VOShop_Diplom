import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductContextProvider';
import useCartContext from "../../hook/useCartContext";
import './ProductDetails.css';
import { ProductData } from '../../types/types';

const ProductDetails = () => {
    let params = useParams();
    const id = Number(params.id);
    const data = useContext(ProductsContext) as ProductData[];
    const { dispatch } = useCartContext();

    if (!data || isNaN(id) || id < 1 || id > data.length) {
        return <div>Product not found</div>;
    }

    const product = data[id - 1];
    const { image, title, description, price, category } = product;

    const handleAddToCart = () => {
        dispatch({ type: "ADD_ITEM", payload: product });
    };

    return (
        <div className="product-details">
            <img className="product-details__image" src={image} alt="product" />
            <div className="product-details__title-container">
                <h3 className="product-details__title">{title}</h3>
                <p className="product-details__description">{description}</p>
                <p className="product-details__category"><span>Category: </span>{category}</p>
                <div className="product-details__button-container">
                    <span className="product-details__price">{price} $</span>
                    <Link to="/products" className="product-details__button">Back to shop</Link>
                </div>
                <button onClick={handleAddToCart} className="product-details__add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;