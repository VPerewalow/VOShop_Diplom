import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { ProductData } from '../../types/types'; 

interface ProductState { 
    products: ProductData[]; 
} 

interface CartState { 
    items: ProductData[]; 
} 
const initialProductState: ProductState = { 
    products: [], 
}; 

const initialCartState: CartState = { 
    items: [], 
}; 
const slice = createSlice({ 
    name: 'store', 
    initialState: { 
        ...initialProductState, 
        ...initialCartState 
    }, 
    
    reducers: { setProducts(state, action: PayloadAction<ProductData[]>) { state.products = action.payload; }, 
    addItem(state, action: PayloadAction<ProductData>) { state.items.push(action.payload); }, 
    removeItem(state, action: PayloadAction<number>) { 
        state.items = state.items.filter((item, index) => index !== action.payload); 
    }, 
}, 
}); 

export const { setProducts, addItem, removeItem } = slice.actions; 
export default slice.reducer;