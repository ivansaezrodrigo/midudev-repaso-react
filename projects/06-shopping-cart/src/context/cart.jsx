import { createContext, useState } from "react";

// 1. Crear contexto
export const CartContext = createContext() 

// 2. Crear provider
export function CartProvider({children}){
    const [cart,setCart] = useState([])

    const addToCart = product => {
        //setCart([...cart, product]) - pero es una copia superficial que podría traer problemas

        // Check if the product is already on the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id) 

        if (productInCartIndex >= 0) {
            // One way could be using the structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }


        // Product is not on the cart
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))

    }

    const removeFromCart = product => {
        setCart(prevState => {
            return prevState.filter(item => item.id != product.id)
        })
    }


    const cleanCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, cleanCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}