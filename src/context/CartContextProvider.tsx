import React, { createContext, useReducer, ReactNode, Dispatch } from 'react'; 

interface CartState { 
    selectedItems: any[]; 
    itemsCounter: number; 
    total: number; 
    checkout: boolean; 
} 

const initialState: CartState = { 
    selectedItems: [], 
    itemsCounter: 0, 
    total: 0, 
    checkout: false 
}; 

const sumItems = (items: any[]) => { 
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0); 
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2); 
    return { itemsCounter, total }; 
}; 

interface Action { 
    type: string; 
    payload?: any; } 
    
const cartReducer = (state: CartState, action: Action): CartState => { 
    switch (action.type) { 
         case "ADD_ITEM": 
         if (!state.selectedItems.find(item => item.id === action.payload.id)) { 
            state.selectedItems.push({ 
                ...action.payload, 
                quantity: 1 
            }); 
        } return { 
            ...state, 
            selectedItems: [...state.selectedItems], 
            ...sumItems(state.selectedItems), 
            checkout: false 
        }; 
        
        case "REMOVE_ITEM": 
        const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id); 
        return { 
            ...state, 
            selectedItems: [...newSelectedItems], 
            ...sumItems(newSelectedItems) 
        }; 
        
        case "INCREASE": const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id); 
        state.selectedItems[indexI].quantity++; 
        return { 
            ...state, 
            ...sumItems(state.selectedItems) 
        }; 
        
        case "DECREASE": const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id); 
        state.selectedItems[indexD].quantity--; 
        return { 
            ...state, 
            ...sumItems(state.selectedItems) 
        }; 
        
        case "CHECKOUT": 
        return { 
            selectedItems: [], 
            itemsCounter: 0, 
            total: 0, 
            checkout: true 
        }; 
        
        case "CLEAR": 
        return { 
            selectedItems: [], 
            itemsCounter: 0, 
            total: 0, 
            checkout: false 
        }; 
        
        default: 
        return state; 
    } 
}; 

interface CartContextProps { 
    state: CartState; 
    dispatch: Dispatch<Action>; 
} 
    
export const CartContext = createContext<CartContextProps | undefined>(undefined); 

interface CartContextProviderProps { 
    children: ReactNode; 
} 
const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => { 
    const [state, dispatch] = useReducer(cartReducer, initialState); 
    return ( 
    <CartContext.Provider value={{ state, dispatch }}> 
    {children} 
    </CartContext.Provider> 
    ); 
}; 

export default CartContextProvider;