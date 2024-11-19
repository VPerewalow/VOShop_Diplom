import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/Store/store';
import { setProducts, addItem } from '../../Redux/Slice/slice';
import Product from '../Product/Product';
import Loader from '../Loader/Loader';
import './ProductStore.css';
import { ProductData, ProductStoreProps } from '../../types/types';
import { fetchProducts } from '../../services/api';

const ProductStore = ({ search }: ProductStoreProps) => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.store.products);

    useEffect(() => {
        const fetchAPI = async () => {
            const products = await fetchProducts();
            dispatch(setProducts(products));
        };
        fetchAPI();
    }, [dispatch]);

    const handleAddToCart = (product: ProductData) => {
        dispatch(addItem(product));
    };
    const filteredProducts = products.filter((product: ProductData) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            {filteredProducts.length ? (
                <div className="store__container"> {filteredProducts.map((product: ProductData) => (
                    <Product key={product.id} productData={product} onAddToCart={() => handleAddToCart(product)} />))}
                </div>
            ) : (
                <div className="store__loading-container">
                    <Loader />
                </div>)}
        </>
    );
};

export default ProductStore;