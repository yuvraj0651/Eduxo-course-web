import React, { useEffect, useReducer } from 'react';
import { CartContext } from './CartContext';
import { reducer as CartReducer } from "../cart/CartReducer";

const CartProvider = ({ children }) => {

    const initialState = {
        cart: JSON.parse(localStorage.getItem("cart")) || [],
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <CartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider