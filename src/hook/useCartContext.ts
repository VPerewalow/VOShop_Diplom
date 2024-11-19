import { useContext } from 'react'; 
import { CartContext } from '../context/CartContextProvider'; 

const useCartContext = () => { 
    const context = useContext(CartContext); 
    if (!context) { 
        throw new Error('useCartContext must be used within a CartContextProvider'); 
    } 
    const { state, dispatch } = context; 
    return { state, dispatch }; 
}; 
    
export default useCartContext;