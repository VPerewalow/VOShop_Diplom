export interface ProductData { 
    id: number; 
    image: string; 
    title: string; 
    description: string;
    price: number; 
    category: string;
    quantity: number; 
} 
export interface CartItem { 
    id: number; 
    image: string; 
    title: string; 
    price: number; 
    quantity: number; 
} 

export interface ProductStoreProps { 
    search: string; 
}

export type ProductsData = ProductData[]; 
export type CartData = CartItem[];
