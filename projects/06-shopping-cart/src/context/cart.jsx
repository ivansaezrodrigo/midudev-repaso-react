import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from '../reducers/cart.js'

// 1. Crear contexto
export const CartContext = createContext()

// 2. Crear provider
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })


    return (
        <CartContext.Provider value={{ cart:state, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}