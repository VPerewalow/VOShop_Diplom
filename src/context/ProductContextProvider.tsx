import React, { useState, useEffect, createContext, ReactNode, ReactElement } from 'react';
import { fetchProducts } from '../services/api';

export const ProductsContext = createContext<any[]>([]);

interface ProductContextProviderProps {
    children: ReactNode;
}

const ProductContextProvider = ({ children }: ProductContextProviderProps) => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        fetchAPI();
    }, []
    );
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};
export default ProductContextProvider;