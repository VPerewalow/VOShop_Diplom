
import { ProductData, CartItem } from '../types/types';;


export const shorten = (title: string): string => { 
    const splitedTitle = title.split(" "); 
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`; 
    return newTitle; 
};

export const quantityCount = (state: { selectedItems: CartItem[] }, id: number): number => { 
    const index = state.selectedItems.findIndex((item: CartItem) => item.id === id); 
    if (index === -1) { 
        return 0; 
    } else { 
        return state.selectedItems[index].quantity; 
    } 
};

export const isInCart = (state: { selectedItems: CartItem[] }, id: number): boolean => { 
    const result = !!state.selectedItems.find((item: CartItem) => item.id === id); 
    return result; 
};

